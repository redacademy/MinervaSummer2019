import React, {Component} from 'react';
import Connections from './Connections';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import CircularLoader from '../../components/CircularLoader';
import {Text} from 'react-native';
import {getToken} from '../../config/models';

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

const SUGGESTED_USERS_QUERY = gql`
  query($interest1: ID!, $interest2: ID!, $interest3: ID!) {
    allUsers(
      filter: {
        AND: [
          {interests_some: {id: $interest1}}
          {interests_some: {id: $interest2}}
          {interests_some: {id: $interest3}}
        ]
      }
      first: 5
    ) {
      firstName
      bio
      lastName
      id
      school
      location
    }
  }
`;

export default class ConnectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: false,
      viewerId: null,
    };
  }
  static navigationOptions = {
    title: 'Connections',
  };
  toggleForm = () => {
    this.setState({formToggle: !this.state.formToggle});
  };
  getViewerId = async () => {
    try {
      const userToken = await getToken();
      this.setState({viewerId: userToken.id});
    } catch (e) {
      throw e;
    }
  };
  displayConnected = () => {
    const {allUsers} = this.props;
    const connectedUsers = [];
    if ((connectedUsers.length = [0])) {
      return this.displayNoConnections();
    }
  };

  displaySuggestions = () => {
    const {allUsers} = this.props;
    return allUsers.map(user => (
      <UserCard user={user} key={user.id}></UserCard>
    ));
  };
  render() {
    !this.state.viewerId ? this.getViewerId() : null;

    return (
      <Query query={ALL_USERS_QUERY}>
        {({loading, error, data}) => {
          if (loading) {
            return <CircularLoader />;
          }
          if (error) {
            return <Text>{error}</Text>;
          }
          return (
            <Connections
              toggleForm={this.toggleForm}
              state={this.state}
              allUsers={data.allUsers}
              viewer={this.state.viewerId}
            />
          );
        }}
      </Query>
    );
  }
}
