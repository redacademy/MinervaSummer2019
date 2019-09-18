import React, {Component} from 'react';
import {Text, View, TextInput, Keyboard, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Mutation} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {UPDATE_PROFILE} from '../../config/apollo/queries';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import InterestButton from '../../components/UserProfile/InterestButton';
import FaveWays from '../../components/UserProfile/FaveWays';
import Selector from '../../components/UserProfile/selector';
import {
  organizer,
  saveInterest,
  saveWays,
} from '../../lib/helpers/interest_function';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileEditable: false,
      ownProfile: true,
      profileInfo: {
        name: '',
        lastName: '',
        status: '',
        location: '',
        school: '',
        bio: '',
        userId: '',
      },
      interest: {},
      WaysToMeet: {
        coffee: {name: 'Coffee', icon: 'coffee', visible: false},
        afterSchool: {
          name: 'After School',
          icon: 'after_school',
          visible: false,
        },
        lunch: {name: 'Lunch', icon: 'lunch', visible: false},
        aWalk: {name: 'A Walk', icon: 'walk', visible: false},
      },
    };

    if (this.props.myProfile) {
      this.props.context.viewer.waysToMeet.map(way =>
        this.updateWaysToMeet(way),
      );
    } else {
      this.props.viewer.User.waysToMeet.map(way => this.updateWaysToMeet(way));
    }
  }

  componentDidMount() {
    let data;
    if (this.props.myProfile) {
      data = this.props.context.viewer;
    } else {
      data = this.props.viewer.User;
    }

    this.setState({
      profileInfo: {
        name: data.firstName,
        ownProfile: this.props.ownProfile,
        lastName: data.lastName,
        status: data.lookingFor,
        location: data.location,
        school: data.school,
        bio: data.bio,
        userId: data.id,
      },
      interest: organizer(this.props.info.allInterests, data.interests),
    });
  }

  editProfile() {
    this.setState({
      profileEditable: !this.state.profileEditable,
    });
  }

  updateProfile = (section, key, newValue) => {
    this.setState(prevState => ({
      [section]: {...prevState[section], [key]: newValue},
    }));
  };

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

  TI = (name, style, length = 10, multiline = false, lines = 1) => {
    let styleTI = {
      ...styles[style],
      ...styles.textInput,
    };

    return (
      <TextInput
        style={styleTI}
        placeholder={name}
        multiline={multiline}
        numberOfLines={lines}
        maxLength={length}
        onBlur={Keyboard.dismiss}
        value={this.state.profileInfo[name]}
        onChangeText={input =>
          this.updateProfile('profileInfo', name, input)
        }></TextInput>
    );
  };

  editProfileSave = async (save = false, mutation) => {
    saveWays(this.state.WaysToMeet);

    const updatedINFO = await mutation({
      variables: {
        id: this.state.profileInfo.userId,
        firstName: this.state.profileInfo.name,
        lastName: this.state.profileInfo.lastName,
        location: this.state.profileInfo.location,
        lookingFor: this.state.profileInfo.status,
        school: this.state.profileInfo.school,
        bio: this.state.profileInfo.bio,
        waysToMeet: saveWays(this.state.WaysToMeet),
        interestsIds: saveInterest(this.state.interest),
      },
    });

    if (updatedINFO) {
      await this.props.context.updateViewer(
        updatedINFO.data.updateUser,
        this.props.context.viewer.token,
      );
      this.setState({
        profileEditable: !this.state.profileEditable,
      });
    }
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
                    <View style={styles.buttonWrapper}>
                      <GradientButton
                        onPress={() =>
                          this.props.myProfile ? this.editProfile() : null
                        }
                        text={this.props.myProfile ? 'Edit Profile' : 'Message'}
                        variant={'contained'}
                      />
                    </View>
                  )}
                  {this.state.profileEditable ? (
                    <Selector
                      title={
                        this.state.profileInfo.status === 'Undecided'
                          ? 'Select a Status'
                          : `Looking for ${this.state.profileInfo.status}`
                      }
                      options={[
                        {title: 'Looking for a Mentor', value: 'Mentor'},
                        {title: 'Looking for a Mentee', value: 'Mentee'},
                        {title: 'Decide Later', value: 'Undecided'},
                      ]}
                      connection={this.updateProfile}></Selector>
                  ) : (
                    <Text style={styles.status}>
                      Status:{' '}
                      {this.state.profileInfo.status === 'Undecided'
                        ? ''
                        : 'Looking for a '}
                      {this.state.profileInfo.status}
                    </Text>
                  )}

                  <View style={styles.locationMetrix}>
                    <Image
                      style={styles.locationIcon}
                      resizeMode={'contain'}
                      source={require('../../assets/PNG/Profile_icons/icon_city.png')}></Image>
                    {this.state.profileEditable ? (
                      this.TI('location', 'locationStatus', 15, false)
                    ) : (
                      <Text style={styles.locationStatus}>
                        {this.state.profileInfo.location}
                      </Text>
                    )}
                  </View>
                  <View style={styles.locationMetrix}>
                    <Image
                      style={styles.locationIcon}
                      resizeMode={'contain'}
                      source={require('../../assets/PNG/Profile_icons/icon_school.png')}></Image>
                    {this.state.profileEditable ? (
                      this.TI('school', 'locationStatus', 15, false)
                    ) : (
                      <Text style={styles.locationStatus}>
                        {this.state.profileInfo.school}
                      </Text>
                    )}
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About Me</Text>
                    {this.state.profileEditable ? (
                      this.TI('bio', 'sectionContent', 300, true, 5)
                    ) : (
                      <Text style={styles.bio}>
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
                            updateInterest={this.updateInterest.bind(this)}
                          />
                        ))}
                      </View>
                    </View>
                  ))}
                </View>

                {this.state.profileEditable && (
                  <View style={styles.buttonWrapper}>
                    <GradientButton
                      onPress={() => this.editProfileSave(true, updateUser)}
                      text="Save Changes"
                    />
                  </View>
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
