import React, {Fragment} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Query, Mutation, Subscription} from '@apollo/react-components';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import CircularLoader from '../../components/CircularLoader';
import {Form, Field} from 'react-final-form';
import {
  CHAT_SUBSCRIPTION,
  CREATE_MESSAGE,
  GET_USER_CHATS,
} from '../../config/apollo/queries';

class SingleChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const {chat, viewer} = this.props;
    const memberNames =
      'You, ' +
      chat.members
        .filter(member => member.id !== viewer.id)
        .map(member => member.firstName)
        .join(', ');
    return (
      <Fragment>
        <Subscription
          subscription={CHAT_SUBSCRIPTION}
          variables={{id: chat.id}}>
          {({loading, error, data}) => {
            const chatMessages = chat.messages;
            if (data) {
              chatMessages.push(data.Message.node);
            }

            return (
              <View style={styles.fixedRoot}>
                <View style={styles.membersNameWrapper}>
                  <Text style={styles.membersText}>{memberNames}</Text>
                </View>
                {chatMessages.length === 0 && chat.members.length === 2 ? (
                  <View style={styles.noMessagesRoot}>
                    <View style={styles.noMessagePictureWrapper}>
                      <Image
                        resizeMode="cover"
                        style={[styles.noMessagePicture, styles.picture1]}
                        source={
                          chat.members[0].photo
                            ? {uri: chat.members[0].photo.url}
                            : require('../../assets/PNG/additional_illustrations/profile.png')
                        }
                      />
                      <Image
                        resizeMode="cover"
                        style={[styles.noMessagePicture, styles.picture2]}
                        source={
                          chat.members[1].photo
                            ? {uri: chat.members[1].photo.url}
                            : require('../../assets/PNG/additional_illustrations/profile.png')
                        }
                      />
                    </View>
                    <Text style={styles.heading}>{`Connect with ${
                      chat.members.find(member => member.id !== viewer.id)
                        .firstName
                    } here!`}</Text>
                    <Text style={styles.subHeading}>
                      Send a message and get to know each other!
                    </Text>
                  </View>
                ) : (
                  <ScrollView
                    contentContainerStyle={styles.root}
                    ref={ref => (this.scrollView = ref)}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                      this.scrollView.scrollToEnd({animated: false});
                    }}>
                    {chatMessages.map((message, index, array) => {
                      const endMessage =
                        !array[index + 1] ||
                        array[index + 1].author.id !== message.author.id
                          ? true
                          : false;
                      return (
                        <Fragment key={message.id}>
                          <View
                            style={[
                              styles.chatCard,
                              message.author.id === viewer.id
                                ? styles.sentMessage
                                : styles.receivedMessage,
                            ]}>
                            <View style={styles.authorPictureWrapper}>
                              {endMessage ? (
                                <Image
                                  source={
                                    message.author.photo
                                      ? {uri: message.author.photo.url}
                                      : require('../../assets/PNG/additional_illustrations/profile.png')
                                  }
                                  style={styles.authorPicture}
                                />
                              ) : null}
                            </View>
                            <View
                              style={
                                message.author.id === viewer.id
                                  ? styles.chatBubbleSent
                                  : styles.chatBubbleReceived
                              }>
                              <Text style={styles.chatBubbleText}>
                                {message.content}
                              </Text>
                            </View>
                          </View>
                          {endMessage ? (
                            <View style={styles.chatSeperator}></View>
                          ) : null}
                        </Fragment>
                      );
                    })}
                  </ScrollView>
                )}
              </View>
            );
          }}
        </Subscription>
        <Mutation
          mutation={CREATE_MESSAGE}
          refetchQueries={() => [
            {query: GET_USER_CHATS, variables: {id: viewer.id}},
          ]}>
          {(createMessage, {loading}) => (
            <Form
              onSubmit={values => {
                if (values.text !== '') {
                  createMessage({
                    variables: {
                      conversationId: chat.id,
                      authorId: viewer.id,
                      content: values.text,
                      sentAt: new Date(),
                    },
                  });
                  values.text = '';
                }
              }}
              render={({handleSubmit, pristine, form, reset}) => (
                <View style={styles.inputWrapper}>
                  <Field
                    name="text"
                    required={true}
                    render={({input, meta}) => (
                      <TextInput
                        multiline={true}
                        scrollEnabled={true}
                        style={styles.input}
                        placeholder={'Type a message...'}
                        keyboardType={'default'}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="done"
                        keyboardAppearance="light"
                        onSubmitEditing={({nativeEvent}) => {
                          Keyboard.dismiss();
                        }}
                        {...input}
                      />
                    )}
                  />
                  <View style={styles.buttonWrapper}>
                    <GradientButton
                      text={'Send'}
                      variant={'squared'}
                      onPress={() => handleSubmit()}
                    />
                  </View>
                </View>
              )}
            />
          )}
        </Mutation>
      </Fragment>
    );
  }
}

export default SingleChat;
