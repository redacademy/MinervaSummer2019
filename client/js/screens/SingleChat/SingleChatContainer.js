import React, {Component} from 'react';
import {Text} from 'react-native';
import FavesContext from '../../context/FavesContext';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import SingleChat from './SingleChat';
import {withNavigation} from 'react-navigation';
import {GET_CHAT} from '../../config/apollo/queries';

class SingleChatContainer extends Component {
  static navigationOptions = {
    title: 'Sign In Details',
  };
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
                if (error) return <Text>Error!</Text>;
                return (
                  <SingleChat
                    chat={chat}
                    messages={chat.messages}
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
