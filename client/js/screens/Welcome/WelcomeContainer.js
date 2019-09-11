import React, {Component} from 'react';
import {View} from 'react-native';
import Welcome from './Welcome';

export default class WelcomeContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <Welcome />;
  }
}
