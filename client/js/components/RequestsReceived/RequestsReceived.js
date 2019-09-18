import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Mutation} from '@apollo/react-components';
import {
  UPDATE_USERS_CONNECTIONS,
  DELETE_USERS_CONNECTIONS_REQUEST,
  USER_QUERY,
  SUGGESTED_USERS_QUERY,
} from '../../config/apollo/queries';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const RequestsReceived = ({viewer, navigation}) => {
  return (
    <Mutation
      mutation={UPDATE_USERS_CONNECTIONS}
      refetchQueries={() => [{query: USER_QUERY, variables: {id: viewer.id}}]}
      fetchPolicy="network-only">
      {(updateUsersConnections, {loading}) => (
        <Mutation
          mutation={DELETE_USERS_CONNECTIONS_REQUEST}
          refetchQueries={() => [
            {query: USER_QUERY, variables: {id: viewer.id}},
          ]}
          fetchPolicy="network-only">
          {(deleteUsersConnectionsRequest, {loading}) => (
            <View>
              {viewer.connectionsReceived.map(request => (
                <View key={request.id} style={styles.container}>
                  <View style={styles.userCard}>
                    {!request.sender.photo ||
                    request.sender.photo.url === null ? (
                      <Image
                        style={styles.image}
                        source={require('../../assets/PNG/additional_illustrations/profile.png')}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{uri: request.sender.photo.url}}
                      />
                    )}

                    <View style={styles.nameWrapper}>
                      <Text style={styles.name}>
                        {request.sender.firstName}
                        <View style={styles.lineB} />
                        {request.receiver.lastName}
                      </Text>
                    </View>

                    <Text style={styles.status}>{request.status}</Text>
                  </View>

                  <View style={styles.messageWrapper}>
                    <Text style={styles.message}>{request.message}</Text>

                    <View style={styles.BtnWrapper}>
                      <TouchableOpacity
                        style={styles.btnYes}
                        activeOpacity={0.8}
                        onPress={() => {
                          updateUsersConnections({
                            variables: {
                              senderId: request.sender.id,
                              receiverId: request.receiver.id,
                              senderConnectionId: [
                                ...request.sender.userConnections.map(
                                  friend => friend.id,
                                ),
                                request.receiver.id,
                              ],
                              receiverConnectionId: [
                                ...viewer.userConnections.map(
                                  friend => friend.id,
                                ),
                                request.sender.id,
                              ],
                            },
                          });
                          deleteUsersConnectionsRequest({
                            variables: {
                              id: request.id,
                            },
                          }) && navigation.navigate('Community');
                        }}>
                        <Text style={styles.btnYesText}>Accept</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.btnNo}
                        activeOpacity={0.8}
                        onPress={() => {
                          deleteUsersConnectionsRequest({
                            variables: {
                              id: request.id,
                            },
                          }) && navigation.navigate('Community');
                        }}>
                        <Text style={styles.btnNoText}>Reject</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
        </Mutation>
      )}
    </Mutation>
  );
};

export default withNavigation(RequestsReceived);
