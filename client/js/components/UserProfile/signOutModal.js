import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../screens/UserProfile/styles';

const modalSingOut = ({visible, toggleLogout, logOut}) => {
  return (
    <Modal backdropColor="white" backdropOpacity={1} isVisible={visible}>
      <View style={styles.modal}>
        <Image
          style={styles.attentionImage}
          resizeMode={'contain'}
          source={require('../../assets/PNG/additional_illustrations/attention.png')}
        />
        <Text style={styles.name}>Ready to sign Out?</Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity onPress={toggleLogout}>
            <Text style={styles.modalCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logOut}>
            <Text style={styles.modalConfirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default modalSingOut;
