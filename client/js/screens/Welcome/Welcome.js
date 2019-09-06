import React from 'react';
import {View, Text} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Welcome to MinervaConnect</Text>
        <Text style={styles.subHeading}>
          This is an App for Minerva Community to connect with like minded
          women.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <GradientButton
          style={styles.button}
          text="Get Started"
          onPress={() => navigation.navigate('Account')}
        />
        <GradientButton
          style={styles.button}
          text="Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default withNavigation(Welcome);
