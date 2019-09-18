import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../screens/UserProfile/styles';

const InterestButton = ({show, updateInterest, info, index, interest}) => {
  return show || info.visible ? (
    <TouchableOpacity
      key={info.title}
      onPress={() => {
        show ? updateInterest(info.title, index, interest) : null;
      }}>
      <Text style={info.visible ? styles.globe : styles.unselectedGlobe}>
        {info.title}
      </Text>
    </TouchableOpacity>
  ) : null;
};

export default InterestButton;
