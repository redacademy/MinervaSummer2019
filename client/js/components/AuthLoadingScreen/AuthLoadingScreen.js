import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import CircularLoader from '../CircularLoader';
import AsyncStorage from '@react-native-community/async-storage';
import {storeToken, getToken, removeToken} from '../../config/models';
import client from '../../config/apollo/index';
import {USER_QUERY} from '../../config/apollo/queries';
import FavesContext from '../../context/FavesContext';

class AuthLoadingScreen extends React.Component {
  componentDidMount = async () => {
    this.hasUserLoggedIn();
  };

  hasUserLoggedIn = async () => {
    const userToken = await getToken('userToken');
    if (!userToken) {
      this.props.navigation.navigate('Auth');
    } else {
      const {data} = await client.query({
        query: USER_QUERY,
        variables: {id: userToken.id},
      });
      await storeToken({...data.User, token: userToken.token});
      await this.context.setViewer();
      this.props.navigation.navigate('App');
    }
  };

  createUserToken = async data => {
    await storeToken({...data, token: userToken.token});
    this.props.navigation.navigate('App');
  };

  render() {
    return <CircularLoader />;
  }
}
AuthLoadingScreen.contextType = FavesContext;
export default AuthLoadingScreen;
