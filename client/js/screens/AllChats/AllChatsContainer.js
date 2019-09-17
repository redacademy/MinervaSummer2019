import React, {Component} from 'react';
import {Text} from 'react-native';
import Chats from './AllChats';
import FavesContext from '../../context/FavesContext';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {GET_USER_CHATS} from '../../config/apollo/queries';

export default class AllChatsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Chats',
  });
  setFilter = filter => {
    this.setState({filter});
  };
  filterChats = chats => {
    if (this.state.filter === 'all' || chats.length === 0) {
      return chats;
    } else if (this.state.filter === 'individual') {
      return chats.filter(chat => chat.members.length === 2);
    } else if (this.state.filter === 'group') {
      return chats.filter(chat => chat.members.length > 2);
    }
  };
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_USER_CHATS} variables={{id: context.viewer.id}}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!</Text>;

                return (
                  <Chats
                    chats={this.filterChats(data.allConversations)}
                    viewer={context.viewer}
                    setFilter={this.setFilter}
                    chatsType={this.state.filter}
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
