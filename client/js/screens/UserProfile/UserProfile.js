import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
  Picker,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import styles from './styles';
import PropTypes from 'prop-types';
import GradientButton from '../../components/GradientButton';
import Ionics from 'react-native-vector-icons/Ionicons';
import InterestButton from './helpers/InterestButton';
import FaveWays from './helpers/FaveWays';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileEditable: false,
      ownProfile: false,
      profileInfo: {
        name: 'Jenny Lee',
        status: 'mentor',
        location: 'Vancouver, Bc',
        school: 'Burnaby:Hihg School',
        pic: '../../assets/PNG/extras/Jenna.png',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasvitae porta magna. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae porta magna.Lorem ipsum dolor sit amet. ',
      },
      WaysToMeet: [
        {name: 'Coffee', icon: 'coffee', visible: true},
        {name: 'After School', icon: 'after_school', visible: true},
        {name: 'Lunch', icon: 'lunch', visible: false},
        {name: 'A Walk', icon: 'walk', visible: true},
      ],
      interest: {
        Personal: [
          {name: 'Sports', visible: true},
          {name: 'Dance', visible: true},
          {name: 'Read', visible: true},
          {name: 'Walk', visible: true},
          {name: 'Read', visible: true},
          {name: 'Walk', visible: true},
        ],
        Social: [
          {name: 'Sports', visible: true},
          {name: 'Dance', visible: false},
          {name: 'Read', visible: false},
          {name: 'Walk', visible: true},
          {name: 'Read', visible: true},
          {name: 'Walk', visible: true},
        ],
        Profesional: [
          {name: 'Sports', visible: true},
          {name: 'Dance', visible: true},
          {name: 'Read', visible: true},
          {name: 'Walk', visible: true},
          {name: 'Read', visible: true},
          {name: 'Walk', visible: true},
        ],
      },
    };
  }

  editProfile(save = false) {
    this.setState({
      profileEditable: !this.state.profileEditable,
    });
    if (save) {
      this.runQuery();
    }
  }

  updateProfile(section, key, newValue) {
    this.setState(prevState => ({
      [section]: {...prevState[section], [key]: newValue},
    }));
  }

  updateWaysToMeet(index) {
    let newWays = this.state.WaysToMeet;
    newWays[index] = {...newWays[index], visible: !newWays[index].visible};
    this.setState(prevState => ({
      WaysToMeet: newWays,
    }));
  }

  updateInterest(key, index, subInterest) {
    let newInterest = this.state.interest[subInterest];
    newInterest[index] = {
      name: [key],
      visible: !newInterest[index].visible,
    };

    this.setState(prevState => ({
      interest: {
        ...prevState.interest,
        [subInterest]: newInterest,
      },
    }));
  }
  TI = (name, style, multiline = false, lines = 1) => {
    let styleTI = {
      ...styles[style],
      borderColor: 'grey',
      borderWidth: 0.5,
      borderStyle: 'solid',
      padding: '3%',
    };
    let maxLength = lines === 1 ? 20 : 300;
    return (
      <TextInput
        style={styleTI}
        placeholder={name}
        multiline={multiline}
        numberOfLines={lines}
        maxLength={maxLength}
        onBlur={Keyboard.dismiss}
        value={this.state.profileInfo[name]}
        onChangeText={input =>
          this.updateProfile('profileInfo', name, input)
        }></TextInput>
    );
  };

  toggleProfile() {
    this.setState({ownProfile: !this.state.ownProfile});
  }

  runQuery() {
    return this.state;
  }

  render() {
    let waysToMeetSelected = this.state.WaysToMeet.filter(way =>
      this.state.profileEditable ? true : way.visible,
    );
    let listOfInterest = Object.keys(this.state.interest);

    return (
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.metaProfile}>
            <Image
              style={styles.profileImage}
              resizeMode={'cover'}
              source={require('../../assets/PNG/extras/Jenna.png')}
            />
            {this.state.profileEditable ? (
              this.TI('name', 'name')
            ) : (
              <Text style={styles.name}>{this.state.profileInfo.name}</Text>
            )}
            {!this.state.profileEditable && (
              <View style={{alignSelf: 'center'}}>
                <GradientButton
                  onPress={() =>
                    this.state.ownProfile ? this.editProfile() : ''
                  }
                  text={this.state.ownProfile ? 'Edit Profile' : 'Message'}
                  width={'40%'}
                  styleGradient={{width: '90%'}}
                />
              </View>
            )}

            <Text style={styles.status}>
              Status: {this.state.profileInfo.status}
            </Text>

            <View style={styles.locationMetrix}>
              <Image
                style={styles.locationIcon}
                resizeMode={'cover'}
                source={require('../../assets/PNG/ways_to_meet/after_school_active.png')}></Image>
              {this.state.profileEditable ? (
                this.TI('location', 'locationStatus')
              ) : (
                <Text style={styles.locationStatus}>
                  {this.state.profileInfo.location}
                </Text>
              )}
            </View>
            <View style={styles.locationMetrix}>
              <Image
                style={styles.locationIcon}
                resizeMode={'cover'}
                source={require('../../assets/PNG/ways_to_meet/after_school_active.png')}></Image>
              {this.state.profileEditable ? (
                this.TI('school', 'locationStatus')
              ) : (
                <Text style={styles.locationStatus}>
                  {this.state.profileInfo.school}
                </Text>
              )}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Me</Text>
              {this.state.profileEditable ? (
                this.TI('bio', 'sectionContent', true, 5)
              ) : (
                <Text style={styles.sectionContent}>
                  {this.state.profileInfo.bio}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.interest}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Favorite Ways to Meet</Text>
              <View style={styles.sectionContent}>
                {waysToMeetSelected.map((item, index) => (
                  <FaveWays
                    key={item.name + index}
                    item={item}
                    show={this.state.profileEditable}
                    index={index}
                    updateWaysToMeet={this.updateWaysToMeet.bind(
                      this,
                    )}></FaveWays>
                ))}
              </View>
            </View>
            {listOfInterest.map(section => (
              <View style={styles.section} key={section}>
                <Text style={styles.sectionTitle}>{section} Interests</Text>
                <View style={styles.sectionContent}>
                  {this.state.interest[section].map((group, index) => (
                    <InterestButton
                      key={group.name + index}
                      info={group}
                      interest={section}
                      index={index}
                      show={this.state.profileEditable}
                      updateInterest={this.updateInterest.bind(
                        this,
                      )}></InterestButton>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {this.state.profileEditable && (
            <GradientButton
              onPress={() => this.editProfile(true)}
              text="Save Changes"
              width={'40%'}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

export default UserProfile;
