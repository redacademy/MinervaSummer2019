import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../config/theme';

export const sharedNavigationOptions = () => ({
  headerTitleStyle: {
    fontFamily: theme.fonts.heavy,
    color: theme.palette.blue,
    fontSize: 20,
  },
});
