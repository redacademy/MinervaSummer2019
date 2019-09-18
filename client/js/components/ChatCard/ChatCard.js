import React, {useState, Fragment} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import theme from '../../config/theme';
import {Mutation, Query} from '@apollo/react-components';
import {
  DELETE_CHAT,
  GET_USERS,
  GET_USER_CHATS,
  ADD_USER_TO_CHAT,
  GET_USERS_NOT_IN_CHAT,
} from '../../config/apollo/queries';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircularLoader from '../../components/CircularLoader';
import AddToChatModal from '../AddToChatModal';
const ChatCard = ({chat, viewer, navigation}) => {
  const {members, messages} = chat;
  const chatees = members.filter(member => member.id !== viewer.id);
  const chateesIds = members.map(member => member.id);
  const recentMessage =
    messages[messages.length - 1] &&
    messages[messages.length - 1].content !== null
      ? messages[messages.length - 1]
      : null;
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate('SingleChat', {chat});
      }}
      onLongPress={() => {
        setOptionsVisible(!optionsVisible);
      }}
      style={[
        styles.root,
        optionsVisible ? {backgroundColor: theme.palette.lightBlue} : null,
      ]}>
      <View style={styles.picturesWrapper}>
        <Image
          style={[styles.picture, styles.picture1]}
          height={50}
          width={50}
          source={
            chat.members[0].photo
              ? {uri: chat.members[0].photo.url}
              : require('../../assets/PNG/additional_illustrations/profile.png')
          }
        />
        <Image
          style={[styles.picture, styles.picture2]}
          height={50}
          width={50}
          source={
            chat.members[1].photo
              ? {uri: chat.members[1].photo.url}
              : require('../../assets/PNG/additional_illustrations/profile.png')
          }
        />
      </View>
      <View
        style={[
          styles.chatTextWrapper,
          optionsVisible ? {borderColor: theme.palette.lightBlue} : null,
        ]}>
        <View style={styles.chatCardTop}>
          <Text style={styles.chatTitle}>
            {chatees.map(member => member.firstName).join(', ')}
          </Text>
          {optionsVisible ? (
            <View style={styles.optionsWrapper}>
              <TouchableOpacity
                onPress={() => {
                  setAddModalVisible(true);
                  setOptionsVisible(false);
                }}>
                <Image
                  resizeMode="contain"
                  style={styles.optionIcon}
                  source={require('../../assets/PNG/additional_illustrations/icon_expand.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDeleteModalVisible(true);
                  setOptionsVisible(false);
                }}>
                <Image
                  resizeMode="contain"
                  style={styles.optionIcon}
                  source={require('../../assets/PNG/additional_illustrations/delete.png')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        {recentMessage ? (
          <View style={styles.chatTextBottom}>
            <Text style={styles.chatPreview}>
              {recentMessage && recentMessage.content.length <= 100
                ? recentMessage.content
                : recentMessage.content.substring(0, 100) + '...'}
            </Text>
            <Text style={styles.messageDate}>
              {new Date(recentMessage.sentAt).toLocaleString('en-us', {
                hour: 'numeric',
                minute: 'numeric',
              })}
            </Text>
          </View>
        ) : null}
      </View>
      <AddToChatModal
        chateesIds={chateesIds}
        viewer={viewer}
        navigation={navigation}
        chat={chat}
        setAddModalVisible={setAddModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
        addModalVisible={addModalVisible}
        deleteModalVisible={deleteModalVisible}
      />
    </TouchableOpacity>
  );
};

export default withNavigation(ChatCard);
