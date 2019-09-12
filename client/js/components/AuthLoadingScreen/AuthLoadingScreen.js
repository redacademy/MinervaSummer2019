import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import CircularLoader from '../CircularLoader';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import AsyncStorage from '@react-native-community/async-storage';
import {storeToken, getToken, removeToken} from '../../config/models';
import client from '../../config/apollo/index';

const USER_QUERY = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      firstName
      lastName
      location
      school
      bio
      lookingFor
      waysToMeet
      interests {
        title
        id
      }
      posts {
        id
      }
    }
  }
`;
class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.hasUserLoggedIn();
  }

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
      this.props.navigation.navigate('App');
    }
  };

  createUserToken = async data => {
    await storeToken({...data, token: userToken.token});
    this.props.navigation.navigate('App');
  };

  render() {
    this.hasUserLoggedIn;
    return <CircularLoader />;
  }
}

export default AuthLoadingScreen;
