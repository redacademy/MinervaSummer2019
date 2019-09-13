import React, {Fragment} from 'react';
import {Text, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ChatCard from '../../components/ChatCard';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AllChats = ({chats, viewer}) => {
  return (
    <Fragment>
      <ScrollView style={styles.root}>
        {chats.map(chat => (
          <ChatCard chat={chat} viewer={viewer} key={chat.id} />
        ))}
      </ScrollView>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.createChatBtn}>
          <AntDesign name="pluscircleo" color="white" size={18} />
          <Text style={styles.btnText}>Create New Chat</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default AllChats;
