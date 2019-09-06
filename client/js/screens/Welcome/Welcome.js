import React from 'react';
import {View, Text, Image} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={require('../../assets/PNG/minerva_logos/minerva_leaf.png')}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Welcome to MinervaConnect</Text>
        <Text style={styles.subHeading}>
          This is an App for Minerva Community to connect with like minded
          women.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <GradientButton
          text="Get Started"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Account')}
        />
        <GradientButton
          variant="outlined"
          text="Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default withNavigation(Welcome);
