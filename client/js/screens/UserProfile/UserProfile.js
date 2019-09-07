import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import styles from './styles';
import PropTypes from 'prop-types';
import GradientButton from '../../components/GradientButton';
import Ionics from 'react-native-vector-icons/Ionicons';

let removeIcon = <Ionics name={`ios-close-circle`} style={styles.removeIcon} />;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileEditable: false,
    };
  }

  editProfile() {
    this.setState({
      profileEditable: !this.state.profileEditable,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.root}>
          <Image
            style={styles.profileImage}
            resizeMode={'contain'}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <Text style={styles.name}>Jenny Lee</Text>
          <GradientButton
            onPress={() => this.editProfile()}
            text="Edit Profile"></GradientButton>
          <Text style={styles.status}>Status:Looking for a Mentor</Text>
          <Text style={styles.locationStatus}>
            <Ionics name={`ios-today`} size={25} /> Vancouver, Bc
          </Text>
          <Text style={styles.locationStatus}>
            <Ionics name={`ios-book`} size={25} /> Burnaby High School
          </Text>
          <View style={styles.interest}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.sectionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae porta magna. Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Cras vitae porta magna.
                Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Favorite Ways to Meet</Text>
              <View style={styles.sectionContent}>
                <View style={styles.icon}>
                  <Ionics name={`ios-cafe`} size={25} />
                  <Text>Coffe</Text>
                </View>
                <View style={styles.icon}>
                  <Ionics name={`ios-school`} size={25} />
                  <Text>After School</Text>
                </View>
                {this.state.profileEditable && (
                  <View style={styles.icon}>
                    <Ionics name={`ios-heart`} size={25} />
                    <Text>aditional</Text>
                  </View>
                )}
                <View style={styles.icon}>
                  <Ionics name={`ios-walk`} size={25} />
                  <Text>Walk</Text>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Personal Interests</Text>
              <View style={styles.sectionContent}>
                <Text style={styles.globe}>
                  Sports{this.state.profileEditable && removeIcon}
                </Text>

                <Text style={styles.globe}>Dance</Text>
                <Text style={styles.globe}>ETC</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Social Interests</Text>
              <View style={styles.sectionContent}>
                <Text style={styles.globe}>Sports</Text>
                <Text style={styles.globe}>Dance</Text>
                <Text style={styles.globe}>ETC</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Profesional Intereset</Text>
              <View style={styles.sectionContent}>
                <Text style={styles.globe}>Sports</Text>
                <Text style={styles.globe}>Dance</Text>
                <Text style={styles.globe}>ETC</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default UserProfile;
