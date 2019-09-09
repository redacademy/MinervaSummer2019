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
      console.log(e);
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
            />
          );
        }}
      </Query>
    );
  }
}
