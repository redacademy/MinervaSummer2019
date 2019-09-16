import React, {Fragment, useState} from 'react';
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import styles from './styles';
import ChatCard from '../../components/ChatCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AllChats = ({chats, viewer}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Fragment>
      <ScrollView style={styles.root}>
        {chats.map(chat => (
          <ChatCard chat={chat} viewer={viewer} key={chat.id} />
        ))}
      </ScrollView>
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
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        style={styles.modalRoot}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalRoot}>
          <View style={styles.backHeader}>
            <TouchableOpacity>
              <Text>
                <Ionicons name="ios-arrow-back" />
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <Text>Yo</Text>
        </View>
      </Modal>
    </Fragment>
  );
};

export default AllChats;
