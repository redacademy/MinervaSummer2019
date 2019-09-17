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
import ChatCard from '../../components/ChatCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import theme from '../../config/theme';
import {Query, Mutation} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {withNavigation} from 'react-navigation';
import {
  GET_USERS,
  CREATE_CHAT,
  GET_USER_CHATS,
} from '../../config/apollo/queries';

const AllChats = ({chats, viewer, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chatsType, setChatsType] = useState('all');
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
          onPress={() => setChatsType('all')}>
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
          onPress={() => setChatsType('individual')}>
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
          onPress={() => setChatsType('group')}>
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
                                <Text style={styles.startChatText}>
                                  Start Chat
                                </Text>
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
    </View>
  );
};

export default withNavigation(AllChats);
