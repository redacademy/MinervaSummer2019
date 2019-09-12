import React, {Component} from 'react';
import {Text} from 'react-native';
import Chats from './AllChats';
import FavesContext from '../../context/FavesContext';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';

const GET_USER_CHATS = gql`
  query($id: ID!) {
    allConversations(filter: {members_some: {id: $id}}) {
      id
      members {
        lastName
        firstName
        id
        photo {
          url
        }
      }
      messages {
        id
        content
        sentAt
        recipient {
          id
          firstName
          lastName
        }
        author {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export default class AllChatsContainer extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Chats',
  });
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_USER_CHATS} variables={{id: context.viewer.id}}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!{console.log(error)}</Text>;
                return (
                  <Chats
                    chats={data.allConversations}
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
