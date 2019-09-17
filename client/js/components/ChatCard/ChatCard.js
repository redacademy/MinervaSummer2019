import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../../config/theme';
import {Mutation} from '@apollo/react-components';
import {DELETE_CHAT, GET_USER_CHATS} from '../../config/apollo/queries';

const ChatCard = ({chat, viewer, navigation}) => {
  const {members, messages} = chat;
  const chatee = members.find(member => member.id !== viewer.id);
  const chateeName = `${chatee.firstName} ${chatee.lastName}`;
  const recentMessage = messages[messages.length - 1];
  const [modalVisible, setModalVisible] = useState(false);

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
        <View style={styles.chatCardTop}>
          <Text style={styles.chatTitle}>{chateeName}</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <Image
              resizeMode="contain"
              style={styles.deleteIcon}
              source={require('../../assets/PNG/additional_illustrations/delete.png')}
            />
          </TouchableOpacity>
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
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalRoot}>
          <View style={styles.deleteWrapper}>
            <View style={styles.deleteTextWrapper}>
              <Text style={styles.deleteHeading}>Delete Chat?</Text>
              <Text style={styles.deleteSubHeading}>
                This chat will be deleted permanently.
              </Text>
            </View>
            <Mutation
              mutation={DELETE_CHAT}
              refetchQueries={() => [
                {query: GET_USER_CHATS, variables: {id: viewer.id}},
              ]}>
              {deleteConversation => (
                <TouchableOpacity
                  style={styles.deleteButtons}
                  onPress={() =>
                    deleteConversation({variables: {id: chat.id}})
                  }>
                  <Text style={styles.deleteConfirm}>Delete</Text>
                </TouchableOpacity>
              )}
            </Mutation>

            <TouchableOpacity
              style={styles.deleteButtons}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.deleteCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default withNavigation(ChatCard);
