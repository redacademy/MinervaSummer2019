import React from 'react';
import {View, Text} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const Welcome = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to MinervaConnect</Text>
      <Text>
        This is an App for Minerva Community to connect with like minded women.
      </Text>
      <GradientButton
        text="Get Started"
        onPress={() => navigation.navigate('SignUp')}
      />
      <GradientButton
        text="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default withNavigation(Welcome);
