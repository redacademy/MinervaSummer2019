import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignIn from './SignIn';
import FavesContext from '../../context/FavesContext';

export default class SignInContainer extends Component {
  static navigationOptions = {
    title: 'Sign In Details',
  };
  render() {
    return (
      <FavesContext.Consumer>
        {context => <SignIn context={context} />}
      </FavesContext.Consumer>
    );
  }
}
