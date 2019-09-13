import React, {Component} from 'react';
import {Text} from 'react-native';
import FavesContext from '../../context/FavesContext';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import SingleChat from './SingleChat';
import {withNavigation} from 'react-navigation';

export const GET_CHAT = gql`
  query($id: ID!) {
    Conversation(id: $id) {
      members {
        id
      }
      messages {
        id
        sentAt
        content
        recipient {
          id
          firstName
          lastName
          photo {
            url
          }
        }
        author {
          id
          firstName
          lastName
          photo {
            url
          }
        }
      }
    }
  }
`;

class SingleChatContainer extends Component {
  render() {
    const {navigation} = this.props;
    const chat = navigation.getParam('chat');
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_CHAT} variables={{id: chat.id}}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!{console.log(error)}</Text>;
                return (
                  <SingleChat
                    chatId={chat.id}
                    messages={this.state.messages}
                    viewer={context.viewer}></SingleChat>
                );
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(SingleChatContainer);
