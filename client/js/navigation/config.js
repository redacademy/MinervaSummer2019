import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../config/theme';

const GradientHeader = props => (
  <View>
    <LinearGradient
      colors={[theme.palette.green, theme.palette.blue]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = () => ({
  header: props => <GradientHeader {...props} />,
});
