import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UserProfile from './UserProfile';

export default class UserProfileContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  //   storeData = async () => {
  //     try {
  //       await AsyncStorage.getItem('userToken', 'stored value');
  //     } catch (e) {
  //       // saving error
  //     }
  //   };
  render() {
    return <UserProfile />;
  }
}
