import styles from './styles';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';

const CircularLoader = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default CircularLoader;
