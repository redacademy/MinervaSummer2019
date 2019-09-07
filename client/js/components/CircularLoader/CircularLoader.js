import styles from './styles';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import theme from '../../config/theme';

const CircularLoader = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color={theme.palette.green} />
    </View>
  );
};

export default CircularLoader;
