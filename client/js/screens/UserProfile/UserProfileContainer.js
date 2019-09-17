import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import UserProfile from './UserProfile';
import {Query} from '@apollo/react-components';
import {removeToken} from '../../config/models';
import styles from './styles';
import FavesContext from '../../context/FavesContext';
import CircularLoader from '../../components/CircularLoader';
import {withNavigation} from 'react-navigation';
import {USER_QUERY, ALL_INTERESTS} from '../../config/apollo/queries';
import Modal from 'react-native-modal';

class UserProfileContainer extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  componentDidMount = () => {
    this.props.navigation.setParams({toggleModal: this.toggleModal});
  };

  logOut = async () => {
    try {
      removeToken();
      this.props.navigation.navigate('AuthLoading');
    } catch (e) {
      throw Error(e);
    }
  };
  static navigationOptions = ({navigation, screenprops}) => ({
    title: 'Profile',
    headerRight: (
      <TouchableOpacity onPress={navigation.getParam('toggleModal')}>
        {navigation.getParam('user') ? (
          <Text></Text>
        ) : (
          <Text style={styles.logout}>Sign Out</Text>
        )}
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
                  <View>
                    <UserProfile
                      context={context}
                      navigation={this.props.navigation}
                      info={data}
                      myProfile={true}
                    />

                    <Modal
                      backdropColor="white"
                      backdropOpacity={1}
                      isVisible={this.state.isModalVisible}>
                      <View style={styles.modal}>
                        <Image
                          style={styles.attentionImage}
                          resizeMode={'contain'}
                          source={require('../../assets/PNG/additional_illustrations/attention.png')}
                        />
                        <Text style={styles.name}>Ready to sign Out?</Text>
                        <View style={styles.modalButtons}>
                          <TouchableOpacity onPress={this.toggleModal}>
                            <Text style={styles.modalCancel}>Cancel</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.logOut}>
                            <Text style={styles.modalConfirm}>Confirm</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal>
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
