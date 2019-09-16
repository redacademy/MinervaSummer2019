import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../../config/theme';
import {Mutation} from '@apollo/react-components';
import {GET_USER_CHATS} from '../../screens/AllChats/AllChatsContainer';
import {DELETE_CHAT} from '../../config/apollo/queries';

const ChatCard = ({chat, viewer, navigation}) => {
  const {members, messages} = chat;
  const chatee = members.find(member => member.id !== viewer.id);
  const chateeName = `${chatee.firstName} ${chatee.lastName}`;
  const recentMessage = messages[messages.length - 1];
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SingleChat', {chat});
      }}
      style={styles.root}>
      <View style={styles.picturesWrapper}>
        <Image
          style={[styles.picture, styles.picture1]}
          height={50}
          width={50}
          source={require('../../assets/PNG/additional_illustrations/profile.png')}
        />
        <Image
          style={[styles.picture, styles.picture2]}
          height={50}
          width={50}
          source={require('../../assets/PNG/additional_illustrations/profile.png')}
        />
      </View>
      <View style={styles.chatTextWrapper}>
        <Text style={styles.chatTitle}>{chateeName}</Text>
        {recentMessage ? (
          <View style={styles.chatTextBottom}>
            <Text style={styles.chatPreview}>
              {recentMessage && recentMessage.content.length <= 100
                ? recentMessage.content
                : recentMessage.content.substring(0, 100) + '...'}
            </Text>
            <View style={styles.dateDeleteWrapper}>
              <Mutation
                mutation={DELETE_CHAT}
                refetchQueries={() => [
                  {query: GET_USER_CHATS, variables: {id: viewer.id}},
                ]}>
                {deleteConversation => (
                  <TouchableOpacity
                    onPress={() =>
                      deleteConversation({variables: {id: chat.id}})
                    }>
                    <FontAwesome
                      color={theme.palette.red}
                      size={18}
                      name="trash-o"
                    />
                  </TouchableOpacity>
                )}
              </Mutation>
              <Text style={styles.messageDate}>
                {new Date(recentMessage.sentAt).toLocaleString('en-us', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ChatCard);
