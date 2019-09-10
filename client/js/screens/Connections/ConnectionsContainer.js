import React, {Component} from 'react';
import Connections from './Connections';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import CircularLoader from '../../components/CircularLoader';
import {Text} from 'react-native';
import {getToken} from '../../config/models';
import FavesContext from '../../context/FavesContext';

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
    };
  }
  static navigationOptions = {
    title: 'Connections',
  };
  toggleForm = () => {
    this.setState({formToggle: !this.state.formToggle});
  };
  fisherYatesShuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  selectInterests = context => {
    const interests = [...context.viewer.interests];
    let randInterestIds = this.fisherYatesShuffle(interests).slice(0, 3);

    return {
      interest1: randInterestIds[0].id,
      interest2: randInterestIds[1].id,
      interest3: randInterestIds[2].id,
    };
  };
  displaySuggestions = () => {
    const {allUsers} = this.props;
    return allUsers.map(user => (
      <UserCard user={user} key={user.id}></UserCard>
    ));
  };
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query
              query={SUGGESTED_USERS_QUERY}
              variables={this.selectInterests(context)}>
              {({loading, error, data}) => {
                if (loading) {
                  return <CircularLoader />;
                }
                if (error) {
                  return <Text>{error}</Text>;
                }
                console.log(data);
                return (
                  <Connections
                    toggleForm={this.toggleForm}
                    state={this.state}
                    suggestedUsers={data.allUsers}
                    viewer={context.viewer}
                  />
                );
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}
