import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import CircularLoader from '../CircularLoader';
import AsyncStorage from '@react-native-community/async-storage';

class ProfileBuilder extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.hasUserLoggedIn();
  }

  hasUserLoggedIn = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return <CircularLoader />;
  }
}

export default ProfileBuilder;
