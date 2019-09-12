import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const ChatCard = ({chat, viewer, navigation}) => {
  console.log(chat);
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
        <View style={styles.chatTextBottom}>
          <Text style={styles.chatPreview}>{recentMessage.content}</Text>
          <Text style={styles.messageDate}>
            {new Date(recentMessage.sentAt).toLocaleString('en-us', {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ChatCard);
