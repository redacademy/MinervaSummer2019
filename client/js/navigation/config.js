import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../config/theme';

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: 'white',
    fontFamily: theme.fonts.heavy,
    fontSize: 20,
  },
  ...Platform.select({
    android: {
      headerLeft:
        navigation.state.routeName === 'Session' ? (
          <BackArrow navigation={navigation} />
        ) : (
          <MenuButton navigation={navigation} />
        ),
    },
  }),
});

const GradientHeader = props => {
  return (
    <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
      <LinearGradient
        colors={[theme.palette.blue, theme.palette.green]}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
      />
      <Header {...props} />
    </View>
  );
};
