import React from 'react';
import {Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../../components/CreateComment/styles';
import ChatCard from '../../components/ChatCard';

const AllChats = ({chats, viewer}) => {
  console.log(chats);
  return (
    <ScrollView style={styles.root}>
      {chats.map(chat => (
        <ChatCard chat={chat} viewer={viewer} key={chat.id} />
      ))}
    </ScrollView>
  );
};

export default AllChats;
