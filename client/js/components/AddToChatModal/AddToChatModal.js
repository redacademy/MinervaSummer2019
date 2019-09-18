import React, {Fragment} from 'react';
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
import theme from '../../config/theme';
import {Mutation, Query} from '@apollo/react-components';
import {
  DELETE_CHAT,
  GET_USERS,
  GET_USER_CHATS,
  ADD_USER_TO_CHAT,
  REMOVE_USER_FROM_CHAT,
} from '../../config/apollo/queries';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircularLoader from '../../components/CircularLoader';

const AddToChatModal = ({
  navigation,
  viewer,
  chat,
  deleteModalVisible,
  addModalVisible,
  setAddModalVisible,
  setDeleteModalVisible,
  chateesIds,
}) => (
  <Fragment>
    <Modal animationType="fade" transparent={true} visible={deleteModalVisible}>
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
                onPress={() => deleteConversation({variables: {id: chat.id}})}>
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
          query={GET_USERS}
          variables={{
            id: viewer.id,
          }}>
          {({loading, error, data}) => {
            if (loading) return <CircularLoader />;
            if (error) return <Text>Error!</Text>;
            return (
              <Fragment>
                <View style={styles.searchWrapper}>
                  <Text style={styles.searchLabel}>Add Members</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Search member name..."
                  />
                  <View style={styles.removeChatMembersWrapper}>
                    {chat.members
                      .filter(user => user.id !== viewer.id)
                      .map(user => (
                        <Mutation
                          mutation={REMOVE_USER_FROM_CHAT}
                          variables={{chatId: chat.id, userId: user.id}}>
                          {(removeUser, {data}) => {
                            if (data) return null;
                            return (
                              <View style={styles.removeUserWrapper}>
                                <View style={styles.removeImageWrapper}>
                                  <TouchableOpacity
                                    style={styles.removeButton}
                                    activeOpacity={0.8}
                                    onPress={() => removeUser()}>
                                    <Ionicons
                                      name="ios-close-circle"
                                      size={24}
                                      color={theme.palette.red}
                                    />
                                  </TouchableOpacity>

                                  <Image
                                    style={styles.image}
                                    source={
                                      user.photo
                                        ? {uri: user.photo.url}
                                        : require('../../assets/PNG/additional_illustrations/profile.png')
                                    }
                                  />
                                </View>
                                <Text style={styles.removeUserName}>
                                  {user.firstName}
                                </Text>
                              </View>
                            );
                          }}
                        </Mutation>
                      ))}
                  </View>
                  <Text
                    style={[
                      styles.subHeading,
                      {textAlign: 'left', fontFamily: theme.fonts.heavy},
                    ]}>
                    Connected
                  </Text>
                </View>
                <ScrollView style={styles.scrollRoot}>
                  {data.allUsers
                    .filter(user => !chateesIds.includes(user.id))
                    .map(user => (
                      <View key={user.id} style={styles.userCard}>
                        <Image
                          style={styles.image}
                          source={
                            user.photo
                              ? {uri: user.photo.url}
                              : require('../../assets/PNG/additional_illustrations/profile.png')
                          }
                        />
                        <View style={styles.chatCardText}>
                          <Text
                            style={
                              styles.userName
                            }>{`${user.firstName} ${user.lastName}`}</Text>
                          {chateesIds.includes(user.id) ? (
                            <Text style={styles.addedText}>Added!</Text>
                          ) : (
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
                          )}
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
);

export default AddToChatModal;
