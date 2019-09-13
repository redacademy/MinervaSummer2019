import React, {Component} from 'react';
import {Text, View, TextInput, Keyboard, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Mutation} from '@apollo/react-components';
import styles from './styles';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import GradientButton from '../../components/GradientButton';
import InterestButton from '../../lib/helpers/InterestButton';
import FaveWays from '../../lib/helpers/FaveWays';
import organizer from '../../lib/helpers/interest_function';
import CircularLoader from '../../components/CircularLoader';

const UPDATE_PROFILE = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $location: String
    $school: String
    $bio: String
    $lookingFor: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      location: $location
      school: $school
      bio: $bio
      lookingFor: $lookingFor
    ) {
      id
    }
  }
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileEditable: false,
      ownProfile: true,
      WaysToMeet: {
        Coffee: {name: 'Coffee', icon: 'coffee', visible: false},
        afterSchool: {
          name: 'After School',
          icon: 'after_school',
          visible: false,
        },
        Lunch: {name: 'Lunch', icon: 'lunch', visible: false},
        aWalk: {name: 'A Walk', icon: 'walk', visible: false},
      },
    };
  }

  componentWillMount() {
    let data = this.props.context.viewer;
    this.setState({
      profileInfo: {
        name: data.firstName,
        lastName: data.lastName,
        status: data.lookingFor,
        location: data.location,
        school: data.school,
        bio: data.bio,
        userId: data.id,
      },
      interest: organizer(this.props.info.allInterests),
    });
    data.waysToMeet.map(way => this.updateWaysToMeet(way));
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

  updateWaysToMeet = way => {
    let newWays = this.state.WaysToMeet;
    newWays[way] = {...newWays[way], visible: !newWays[way].visible};
    this.setState({
      WaysToMeet: newWays,
    });
  };

  updateInterest(key, index, subInterest) {
    let newInterest = this.state.interest[subInterest];
    newInterest[index] = {
      ...newInterest[index],
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

  runQuery = () => {};

  editProfileSave = async (save = false, mutation) => {
    this.setState({
      profileEditable: !this.state.profileEditable,
    });

    const updatedINFO = await mutation({
      variables: {
        id: this.state.profileInfo.userId,
        firstName: this.state.profileInfo.name,
        lastName: this.state.profileInfo.lastName,
        location: this.state.profileInfo.location,
        lookingFor: this.state.profileInfo.status,
        school: this.state.profileInfo.school,
        bio: this.state.profileInfo.bio,
      },
    });
  };
  render() {
    let waysToMeetSelected = Object.keys(this.state.WaysToMeet);
    let listOfInterest = Object.keys(this.state.interest);

    return (
      <Mutation mutation={UPDATE_PROFILE}>
        {(updateUser, {loading, error}) => {
          if (loading) {
            return <CircularLoader></CircularLoader>;
          }
          if (error) {
            return (
              <View>
                <Text>Data not saved</Text>
              </View>
            );
          }
          return (
            <ScrollView>
              <View style={styles.root}>
                <View style={styles.metaProfile}>
                  <Image
                    style={styles.profileImage}
                    resizeMode={'cover'}
                    source={require('../../assets/PNG/additional_illustrations/profile.png')}
                  />
                  {this.state.profileEditable ? (
                    <View>
                      <View>{this.TI('name', 'name')}</View>
                      <View>{this.TI('lastName', 'name')}</View>
                    </View>
                  ) : (
                    <Text style={styles.name}>
                      {`${this.state.profileInfo.name} ${this.state.profileInfo.lastName}`}
                    </Text>
                  )}
                  {!this.state.profileEditable && (
                    <View style={{alignSelf: 'center'}}>
                      <GradientButton
                        onPress={() =>
                          this.state.ownProfile ? this.editProfile() : ''
                        }
                        text={
                          this.state.ownProfile ? 'Edit Profile' : 'Message'
                        }
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
                    <Text style={styles.sectionTitle}>
                      Favorite Ways to Meet
                    </Text>
                    <View style={styles.sectionContent}>
                      {waysToMeetSelected.map((item, index) => (
                        <FaveWays
                          key={item + index}
                          item={this.state.WaysToMeet[item]}
                          show={this.state.profileEditable}
                          index={item}
                          updateWaysToMeet={this.updateWaysToMeet}></FaveWays>
                      ))}
                    </View>
                  </View>
                  {listOfInterest.map(section => (
                    <View style={styles.section} key={section}>
                      <Text style={styles.sectionTitle}>
                        {section} Interests
                      </Text>
                      <View style={styles.sectionContent}>
                        {this.state.interest[section].map((group, index) => (
                          <InterestButton
                            key={group.title + index}
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
                    onPress={() => this.editProfileSave(true, updateUser)}
                    text="Save Changes"
                    width={'40%'}
                  />
                )}
              </View>
            </ScrollView>
          );
        }}
      </Mutation>
    );
  }
}

export default UserProfile;
