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
import {Query, Mutation} from '@apollo/react-components';
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
const SingleChat = ({chat, viewer}) => {
  const [text, setText] = React.useState();

  const recipient = [
    chat.messages[0].recipient.id,
    chat.messages[0].author.id,
  ].find(id => id !== viewer.id);

  return (
    <Fragment>
      <ScrollView
        contentContainerStyle={styles.root}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({animated: false});
        }}>
        {chat.messages.map(message => (
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
              <Text style={styles.chatBubbleText}>{message.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Mutation
        mutation={CREATE_MESSAGE}
        refetchQueries={() => [
          {query: GET_USER_CHATS, variables: {id: viewer.id}},
          {query: GET_CHAT, variables: {id: chat.id}},
        ]}>
        {(createMessage, {loading}) => (
          <View style={styles.inputWrapper}>
            <TextInput
              onChangeText={text => setText(text)}
              value={text}
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
                  if (text !== '') {
                    createMessage({
                      variables: {
                        conversationId: chat.id,
                        authorId: viewer.id,
                        recipientId: recipient,
                        content: text,
                        sentAt: new Date(),
                      },
                    });
                    setText('');
                  }
                }}
              />
            </View>
          </View>
        )}
      </Mutation>
    </Fragment>
  );
};

export default SingleChat;
