import React, {Fragment} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {gql} from 'apollo-boost';
import {Query, Mutation, Subscription} from '@apollo/react-components';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import {GET_USER_CHATS} from '../AllChats/AllChatsContainer';
import CircularLoader from '../../components/CircularLoader';
import {GET_CHAT} from './SingleChatContainer';

const CREATE_MESSAGE = gql`
  mutation createMessage(
    $conversationId: ID!
    $authorId: ID!
    $recipientId: ID!
    $content: String
    $sentAt: DateTime!
  ) {
    createMessage(
      conversationId: $conversationId
      authorId: $authorId
      recipientId: $recipientId
      content: $content
      sentAt: $sentAt
    ) {
      id
    }
  }
`;

const CHAT_SUBSCRIPTION = gql`
  subscription {
    Message(filter: {mutation_in: [CREATED]}) {
      node {
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
class SingleChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const {chat, viewer} = this.props;
    const recipient = [
      chat.messages[0].recipient.id,
      chat.messages[0].author.id,
    ].find(id => id !== viewer.id);

    return (
      <Fragment>
        <Subscription
          subscription={CHAT_SUBSCRIPTION}
          onSubscriptionData={data => {
            if (data && data.Message) {
              console.log(data);
            }
          }}>
          {({loading, error, data}) => {
            if (loading) console.log(loading);
            if (error) console.log(error);
            const chatMessages = chat.messages;
            if (data) {
              chatMessages.push(data.Message.node);
            }

            return (
              <ScrollView
                contentContainerStyle={styles.root}
                ref={ref => (this.scrollView = ref)}
                onContentSizeChange={(contentWidth, contentHeight) => {
                  this.scrollView.scrollToEnd({animated: false});
                }}>
                {chatMessages.map(message => (
                  <View
                    key={message.id}
                    style={[
                      styles.chatCard,
                      message.author.id === viewer.id
                        ? styles.sentMessage
                        : styles.receivedMessage,
                    ]}>
                    <Image
                      source={
                        message.author.photo
                          ? message.author.photo.url
                          : require('../../assets/PNG/additional_illustrations/profile.png')
                      }
                      style={styles.authorPicture}
                    />
                    <View style={styles.chatBubble}>
                      <Text style={styles.chatBubbleText}>
                        {message.content}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            );
          }}
        </Subscription>
        <Mutation
          mutation={CREATE_MESSAGE}
          refetchQueries={() => [
            {query: GET_USER_CHATS, variables: {id: viewer.id}},
            // {query: GET_CHAT, variables: {id: chat.id}},
          ]}>
          {(createMessage, {loading}) => (
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={text => this.setState({text})}
                value={this.state.text}
                style={styles.input}
                placeholder={'Type a message...'}
                keyboardType={'default'}
              />
              {loading && <CircularLoader></CircularLoader>}

              <View style={styles.buttonWrapper}>
                <GradientButton
                  text={'Send'}
                  variant={'squared'}
                  onPress={() => {
                    if (this.state.text !== '') {
                      createMessage({
                        variables: {
                          conversationId: chat.id,
                          authorId: viewer.id,
                          recipientId: recipient,
                          content: this.state.text,
                          sentAt: new Date(),
                        },
                      });
                      this.setState({text: ''});
                    }
                  }}
                />
              </View>
            </View>
          )}
        </Mutation>
      </Fragment>
    );
  }
}

export default SingleChat;
