import React, {Fragment, useState} from 'react';
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import theme from '../../config/theme';
import {Query, Mutation} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {
  GET_USERS,
  CREATE_CHAT,
  GET_USER_CHATS,
} from '../../config/apollo/queries';

const StartChatModal = ({
  navigation,
  modalVisible,
  viewer,
  setModalVisible,
}) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={modalVisible}
    propagateSwipe={true}>
    <View style={styles.modalRoot}>
      <View style={styles.backHeader}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
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
      <Query query={GET_USERS} variables={{id: viewer.id}}>
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
                  <Mutation
                    key={user.id}
                    mutation={CREATE_CHAT}
                    refetchQueries={() => [
                      {query: GET_USER_CHATS, variables: {id: viewer.id}},
                    ]}>
                    {createConversation => (
                      <View style={styles.userCard}>
                        <Image
                          style={styles.image}
                          source={require('../../assets/PNG/additional_illustrations/profile.png')}
                        />
                        <View style={styles.chatCardText}>
                          <Text
                            style={
                              styles.userName
                            }>{`${user.firstName} ${user.lastName}`}</Text>
                          <TouchableOpacity
                            style={styles.startChatbutton}
                            onPress={async () => {
                              const chat = await createConversation({
                                variables: {id1: viewer.id, id2: user.id},
                              });

                              navigation.navigate('SingleChat', {
                                chat: chat.data.createConversation,
                              });
                              setModalVisible(false);
                            }}>
                            <Text style={styles.startChatText}>Start Chat</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  </Mutation>
                ))}
              </ScrollView>
            </Fragment>
          );
        }}
      </Query>
    </View>
  </Modal>
);

export default StartChatModal;
