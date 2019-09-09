import React, {Component} from 'react';
import Connections from './Connections';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import CircularLoader from '../../components/CircularLoader';
import {Text} from 'react-native';

const ALL_USERS_QUERY = gql`
  {
    allUsers {
      id
      bio
      firstName
      lastName
      location
      school
      interests {
        id
      }
    }
  }
`;

export default class ConnectionsContainer extends Component {
  static navigationOptions = {
    title: 'Connections',
  };
  render() {
    return (
      <Query query={ALL_USERS_QUERY}>
        {({loading, error, data}) => {
          if (loading) {
            return <CircularLoader />;
          }
          if (error) {
            return <Text>{error}</Text>;
          }
          return <Connections allUsers={data.allUsers} />;
        }}
      </Query>
    );
  }
}
