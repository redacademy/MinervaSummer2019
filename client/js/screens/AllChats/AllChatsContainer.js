import React, {Component} from 'react';
import {Text} from 'react-native';
import Chats from './AllChats';
import FavesContext from '../../context/FavesContext';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {GET_USER_CHATS} from '../../config/apollo/queries';

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
