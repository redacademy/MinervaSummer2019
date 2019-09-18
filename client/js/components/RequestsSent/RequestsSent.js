import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const RequestsSent = ({viewer}) => {
  return (
    <View>
      {/* {console.log(viewer)} */}

      {viewer.connectionsSent.map(request => (
        <View style={styles.userCard}>
          {request.receiver.photo.url === null ? (
            <Image
              style={styles.image}
              source={require('../../assets/PNG/additional_illustrations/profile.png')}
            />
          ) : (
            <Image
              style={styles.image}
              source={{uri: request.receiver.photo.url}}
            />
          )}

          <View style={styles.messageWrapper}>
            <Text style={styles.name}>
              {request.receiver.firstName}
              <View style={styles.lineB} />
              {request.receiver.lastName}
            </Text>
          </View>
          <Text style={styles.status}>{request.status}</Text>
        </View>
      ))}
    </View>
  );
};

export default RequestsSent;
