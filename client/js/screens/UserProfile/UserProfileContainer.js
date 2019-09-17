import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import UserProfile from './UserProfile';
import {Query} from '@apollo/react-components';
import {removeToken} from '../../config/models';
import styles from './styles';
import FavesContext from '../../context/FavesContext';
import CircularLoader from '../../components/CircularLoader';
import {withNavigation} from 'react-navigation';
import {USER_QUERY, ALL_INTERESTS} from '../../config/apollo/queries';

class UserProfileContainer extends Component {
  static navigationOptions = ({navigation, screenprops}) => ({
    title: 'Profile',
    headerRight: (
      <TouchableOpacity
        onPress={async () => {
          try {
            await removeToken();
            navigation.navigate('AuthLoading');
          } catch (e) {
            throw Error(e);
          }
        }}>
        <Text style={styles.logout}>Sign Out </Text>
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
              variables={{id: this.props.navigation.getParam('user')}}>
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
                  <UserProfile
                    context={context}
                    navigation={this.props.navigation}
                    info={data}
                    myProfile={true}
                  />
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
