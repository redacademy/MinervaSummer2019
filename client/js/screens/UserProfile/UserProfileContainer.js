import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UserProfile from './UserProfile';

export default class UserProfileContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return <UserProfile navigation={this.props.navigation} />;
  }
}
