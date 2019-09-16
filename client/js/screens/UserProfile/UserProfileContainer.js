import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UserProfile from './UserProfile';
import {removeToken} from '../../config/models';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class UserProfileContainer extends Component {
  static navigationOptions = ({navigation, screenprops}) => ({
    title: 'Profile',
    headerRight: (
      <TouchableOpacity
        onPress={async () => {
          try {
            removeToken();
            navigation.navigate('AuthLoading');
          } catch (e) {
            throw Error(e);
          }
        }}>
        <Text style={styles.logout}>Sign Out</Text>
      </TouchableOpacity>
    ),
  });
  render() {
    return <UserProfile navigation={this.props.navigation} />;
  }
}

export default withNavigation(UserProfileContainer);
