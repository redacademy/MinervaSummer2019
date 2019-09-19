import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import UserProfile from './UserProfile';
import {Query} from '@apollo/react-components';
import {removeToken} from '../../config/models';
import styles from './styles';
import FavesContext from '../../context/FavesContext';
import CircularLoader from '../../components/CircularLoader';
import {withNavigation} from 'react-navigation';
import {USER_QUERY, ALL_INTERESTS} from '../../config/apollo/queries';
import SignOutModal from '../../components/UserProfile/signOutModal';

class UserProfileContainer extends Component {
  state = {
    isLogoutModalVisible: false,
  };

  toggleLogoutModal = () => {
    this.setState({isLogoutModalVisible: !this.state.isLogoutModalVisible});
  };
  componentDidMount = () => {
    this.props.navigation.setParams({
      toggleLogoutModal: this.toggleLogoutModal,
    });
  };
  logOut = async () => {
    try {
      await removeToken();
      this.props.navigation.navigate('AuthLoading');
    } catch (e) {}
  };
  static navigationOptions = ({navigation, screenprops}) => ({
    title: 'Profile',
    headerRight: navigation.getParam('user') ? null : (
      <TouchableOpacity onPress={navigation.getParam('toggleLogoutModal')}>
        <Text style={styles.logout}>Sign Out</Text>
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return this.props.navigation.getParam('user') ? (
            <Query
              query={USER_QUERY}
              variables={{id: this.props.navigation.getParam('user')}}
              fetchPolicy="network-only">
              {({loading, error, data}) => {
                let userInfo = data;

                if (loading) return <CircularLoader />;
                if (error) return <Text>Please Reload!</Text>;
                return (
                  <Query query={ALL_INTERESTS}>
                    {({loading, error, data}) => {
                      if (loading) return <CircularLoader />;
                      if (error) return <Text>Please Reload!</Text>;
                      return (
                        <UserProfile
                          context={context}
                          navigation={this.props.navigation}
                          info={data}
                          viewer={userInfo}
                          myProfile={false}
                        />
                      );
                    }}
                  </Query>
                );
              }}
            </Query>
          ) : (
            <Query query={ALL_INTERESTS}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!</Text>;
                return (
                  <View>
                    <UserProfile
                      context={context}
                      navigation={this.props.navigation}
                      info={data}
                      myProfile={true}
                    />

                    <SignOutModal
                      visible={this.state.isLogoutModalVisible}
                      toggleLogout={this.toggleLogoutModal}
                      logOut={this.logOut}
                    />
                  </View>
                );
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(UserProfileContainer);
