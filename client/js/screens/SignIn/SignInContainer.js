import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignIn from './SignIn';

export default class SignInContainer extends Component {
  static navigationOptions = {
    title: 'Sign In Details',
  };
  storeData = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'stored value');
    } catch (e) {
      // saving error
    }
  };
  render() {
    return <SignIn />;
  }
}
