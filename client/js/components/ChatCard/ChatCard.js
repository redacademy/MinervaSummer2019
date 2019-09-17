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

const ChatCard = ({chat, viewer, navigation}) => {
  const {members, messages} = chat;
  const chatees = members.filter(member => member.id !== viewer.id);
  const recentMessage = messages[messages.length - 1];
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  return (
    <TouchableOpacity
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
      <Fragment>
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
            <Text style={styles.chatTitle}>
              {chatees.map(member => member.firstName).join(', ')}
            </Text>
            {optionsVisible ? (
              <View style={styles.optionsWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    setAddModalVisible(true);
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={deleteModalVisible}>
          <View style={styles.deleteModalRoot}>
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
                  setDeleteModalVisible(false);
                }}>
                <Text style={styles.deleteCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={addModalVisible}
          propagateSwipe={true}>
          <View style={styles.modalRoot}>
            <View style={styles.backHeader}>
              <TouchableOpacity onPress={() => setAddModalVisible(false)}>
                <Text style={styles.backButton}>
                  <Ionicons
                    name="ios-arrow-back"
                    color={theme.palette.blue}
                    size={18}
                  />
                  Back
                </Text>
              </TouchableOpacity>
            </View>
            <Query
              query={GET_USERS_NOT_IN_CHAT}
              variables={{
                ids: [viewer.id, ...chat.members.map(member => member.id)],
              }}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!{console.log(error)}</Text>;
                return (
                  <Fragment>
                    <View style={styles.searchWrapper}>
                      <Text style={styles.searchLabel}>Add Members</Text>
                      <TextInput
                        style={styles.textInput}
                        placeholder="Search member name..."
                      />
                      <Text
                        style={[
                          styles.subHeading,
                          {textAlign: 'left', fontFamily: theme.fonts.heavy},
                        ]}>
                        Connected
                      </Text>
                    </View>
                    <ScrollView style={styles.scrollRoot}>
                      {data.allUsers.map(user => (
                        <View key={user.id} style={styles.userCard}>
                          <Image
                            style={styles.image}
                            source={require('../../assets/PNG/additional_illustrations/profile.png')}
                          />
                          <View style={styles.chatCardText}>
                            <Text
                              style={
                                styles.userName
                              }>{`${user.firstName} ${user.lastName}`}</Text>
                            <Mutation
                              mutation={ADD_USER_TO_CHAT}
                              refetchQueries={() => [
                                {
                                  query: GET_USER_CHATS,
                                  variables: {id: viewer.id},
                                },
                              ]}>
                              {(addToUserConversation, {loading, data}) => {
                                if (loading) return <CircularLoader />;
                                if (data)
                                  return (
                                    <Text style={styles.addedText}>Added!</Text>
                                  );
                                return (
                                  <TouchableOpacity
                                    style={styles.startChatbutton}
                                    onPress={async () => {
                                      await addToUserConversation({
                                        variables: {
                                          chatId: chat.id,
                                          userId: user.id,
                                        },
                                      });
                                    }}>
                                    <Text style={styles.startChatText}>
                                      Add Member
                                    </Text>
                                  </TouchableOpacity>
                                );
                              }}
                            </Mutation>
                          </View>
                        </View>
                      ))}
                    </ScrollView>
                    <View style={styles.continueButtonWrapper}>
                      <GradientButton
                        text="Continue to Chat"
                        onPress={() => {
                          navigation.navigate('SingleChat', {chat});
                          setAddModalVisible(false);
                        }}
                      />
                    </View>
                  </Fragment>
                );
              }}
            </Query>
          </View>
        </Modal>
      </Fragment>
    </TouchableOpacity>
  );
};

export default withNavigation(ChatCard);
