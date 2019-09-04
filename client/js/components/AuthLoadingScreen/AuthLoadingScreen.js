import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import CircularLoader from '../CircularLoader';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.hasUserLoggedIn();
  }

  hasUserLoggedIn = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <CircularLoader />
      </View>
    );
  }
}

export default AuthLoadingScreen;
