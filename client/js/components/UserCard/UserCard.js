import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import GradientButton from '../GradientButton';
import {withNavigation} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UserCard = ({user, navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.userDetailsWrapper}>
        <Image
          style={styles.userPicture}
          source={require('../../assets/PNG/additional_illustrations/profile.png')}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>
            {`${user.firstName} ${user.lastName}`}
          </Text>
          {user.location ? (
            <Text style={styles.locationSchool}>
              <MaterialCommunityIcons
                name={'home-city-outline'}
                style={styles.locationSchool}
              />
              {`  ${user.location}`}
            </Text>
          ) : null}
          {user.school ? (
            <Text style={styles.locationSchool}>
              <MaterialCommunityIcons
                name={'book-open-page-variant'}
                style={styles.locationSchool}
              />
              {`  ${user.school}`}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={styles.aboutMeWrapper}>
        <Text style={styles.aboutMeHeading}>About Me</Text>
        <Text style={styles.userBio}>{user.bio}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <GradientButton
          text={'View Profile'}
          onPress={() => navigation.navigate('Profile', {user})}
        />
      </View>
    </View>
  );
};

export default withNavigation(UserCard);