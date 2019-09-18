import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../screens/UserProfile/styles';

const reportUserModal = ({visible, toggleLogout, report, navigation}) => {
  return (
    <Modal backdropColor="white" backdropOpacity={1} isVisible={visible}>
      <View style={styles.modal}>
        <Image
          style={styles.attentionImage}
          resizeMode={'contain'}
          source={require('../../assets/PNG/additional_illustrations/attention.png')}
        />
        <Text style={styles.name}>
          Are you sure you want to report this user?
        </Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity onPress={toggleLogout}>
            <Text style={styles.modalCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalReport')}>
            <Text style={styles.modalConfirm}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default reportUserModal;
