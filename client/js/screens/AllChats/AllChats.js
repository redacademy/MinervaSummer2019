import React, {Fragment, useState} from 'react';
import {Text, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ChatCard from '../../components/ChatCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {withNavigation} from 'react-navigation';
import StartChatModal from '../../components/StartChatModal';

const AllChats = ({chats, viewer, navigation, setFilter, chatsType}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.root}>
      <View style={styles.togglesWrapper}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.all,
            styles.toggleBase,
            chatsType === 'all' ? styles.toggleActive : styles.toggleInactive,
          ]}
          onPress={() => setFilter('all')}>
          <Text
            style={[
              styles.textBase,
              chatsType === 'all' ? styles.textActive : styles.textInactive,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.individual,
            styles.toggleBase,
            chatsType === 'individual'
              ? styles.toggleActive
              : styles.toggleInactive,
          ]}
          onPress={() => setFilter('individual')}>
          <Text
            style={[
              styles.textBase,
              chatsType === 'individual'
                ? styles.textActive
                : styles.textInactive,
            ]}>
            Individual
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.group,
            styles.toggleBase,
            chatsType === 'group' ? styles.toggleActive : styles.toggleInactive,
          ]}
          onPress={() => setFilter('group')}>
          <Text
            style={[
              styles.textBase,
              chatsType === 'group' ? styles.textActive : styles.textInactive,
            ]}>
            Group
          </Text>
        </TouchableOpacity>
      </View>
      {chats.length !== 0 ? (
        <ScrollView style={styles.root}>
          {chats.map(chat => (
            <ChatCard chat={chat} viewer={viewer} key={chat.id} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noChatRoot}>
          <Image
            resizeMode="contain"
            style={styles.chatImage}
            source={require('../../assets/PNG/additional_illustrations/chat.png')}
          />
          <Text style={styles.heading}>It's nice to chat with someone!</Text>
          <Text style={styles.subHeading}>
            You can connect with new women via the connections page or create a
            new chat with someone you have connected with.
          </Text>
        </View>
      )}
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.createChatBtn}
          onPress={() => {
            setModalVisible(true);
          }}>
          <AntDesign name="pluscircleo" color="white" size={18} />
          <Text style={styles.btnText}>Create New Chat</Text>
        </TouchableOpacity>
      </View>
      <StartChatModal
        navigation={navigation}
        modalVisible={modalVisible}
        viewer={viewer}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default withNavigation(AllChats);
