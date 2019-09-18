import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {Mutation} from '@apollo/react-components';
import {
  UPDATE_USERS_CONNECTIONS,
  DELETE_USERS_CONNECTIONS_REQUEST,
} from '../../config/apollo/queries';
import styles from './styles';

const RequestsReceived = ({viewer}) => {
  return (
    <Mutation mutation={UPDATE_USERS_CONNECTIONS}>
      {(updateUsersConnections, {loading}) => (
        <Mutation mutation={DELETE_USERS_CONNECTIONS_REQUEST}>
          {(deleteUsersConnectionsRequest, {loading}) => (
            <View>
              {console.log(viewer)}

              {viewer.connectionsReceived.map(request => (
                <View>
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

                    <View style={styles.messageWrapper}>
                      <Text style={styles.name}>
                        {request.sender.firstName}
                        <View style={styles.lineB} />
                        {request.receiver.lastName}
                      </Text>
                    </View>

                    <Text style={styles.status}>{request.status}</Text>
                  </View>

                  <View>
                    <Text>{request.message}</Text>

                    <View>
                      <Button
                        title={'Accept'}
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
                          });
                        }}
                      />

                      <Button
                        title={'Reject'}
                        // onPress={() =>
                        //   deleteUsersConnectionsRequest({
                        //     variables: {
                        //       id: request.id,
                        //     },
                        //   })
                        // }
                      />
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

export default RequestsReceived;
