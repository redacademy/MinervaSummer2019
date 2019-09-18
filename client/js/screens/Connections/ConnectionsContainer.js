import React, {Component} from 'react';
import Connections from './Connections';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {Text} from 'react-native';
import {getToken} from '../../config/models';
import FavesContext from '../../context/FavesContext';
import {SUGGESTED_USERS_QUERY} from '../../config/apollo/queries';

export default class ConnectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTopic: 'Suggested',
    };
  }
  static navigationOptions = {
    title: 'Connections',
  };

  insertState = topic => {
    this.setState({selectTopic: topic});
  };

  selectState = () => {
    return this.state.selectTopic;
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
                return (
                  <Connections
                    state={this.state}
                    suggestedUsers={data.allUsers}
                    viewer={context.viewer}
                    insertState={this.insertState}
                    selectState={this.selectState}
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
