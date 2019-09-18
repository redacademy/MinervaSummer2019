import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Mutation} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import {UPDATE_PROFILE, USER_QUERY} from '../../config/apollo/queries';
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
import Modal from 'react-native-modal';
import {CREATE_CONNECTIONS} from '../../config/apollo/queries';
import ReportUserModal from '../../components/UserProfile/reportUserModal';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileEditable: false,
      ownProfile: true,
      isReportModalVisible: false,
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
      isModalVisible: false,
      text: '',
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
        lastName: data.lastName,
        status: data.lookingFor,
        location: data.location,
        school: data.school,
        bio: data.bio,
        userId: data.id,
        photo: data.photo ? data.photo.url : null,
      },
      ownProfile: this.props.myProfile,
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


  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  onChangeText = text => {
    this.setState({text: text});
  };

  checkConnectionStatus = (receiver, viewer) => {
    return !!viewer.connectionsSent.find(
      connectionSent =>
        connectionSent.receiver.id === receiver.id &&
        connectionSent.status === 'PENDING',
    );
  };

  toggleReportModal = () => {
    this.setState({isReportModalVisible: !this.state.isReportModalVisible});
  };

  reportUser = info => {};


  render() {
    let waysToMeetSelected = Object.keys(this.state.WaysToMeet);
    let listOfInterest = Object.keys(this.state.interest);
    console.log(this.props);

    let viewer = this.props.context.viewer;
    let receiver;

    if (this.props.viewer.User) {
      receiver = this.props.viewer.User;
    }

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
                    source={
                      this.state.photo
                        ? {uri: this.state.photo}
                        : require('../../assets/PNG/additional_illustrations/profile.png')
                    }
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
                    <View>
                      <Mutation
                        mutation={CREATE_CONNECTIONS}
                        onCompleted={() => (
                          <GradientButton
                            text="Pending"
                            onPress={() =>
                              console.log('Pending')
                            }></GradientButton>
                        )}
                        refetchQueries={() => [
                          {
                            query: USER_QUERY,
                            variables: {id: this.props.viewer.User.id},
                          },
                        ]}>
                        {(createConnection, {loading, data}) => {
                          if (data) {
                            return (
                              <GradientButton
                                text="Pending"
                                onPress={() =>
                                  console.log('Pending')
                                }></GradientButton>
                            );
                          } else {
                            return (
                              <Fragment>
                                <View style={styles.buttonWrapper}>
                                  <GradientButton
                                    onPress={() =>
                                      this.props.myProfile
                                        ? this.editProfile()
                                        : receiver.userConnections.includes(
                                            viewer.id,
                                          )
                                        ? `Let's chat`
                                        : this.checkConnectionStatus(
                                            receiver,
                                            viewer,
                                          )
                                        ? null
                                        : this.toggleModal()
                                    }
                                    text={
                                      this.props.myProfile
                                        ? 'Edit Profile'
                                        : receiver.userConnections.includes(
                                            viewer.id,
                                          )
                                        ? 'Chat'
                                        : this.checkConnectionStatus(
                                            receiver,
                                            viewer,
                                          )
                                        ? 'Pending'
                                        : 'Lets Connect'
                                    }
                                    variant={'contained'}
                                  />
                                </View>
                                <Modal
                                  animationIn={'slideInRight'}
                                  animationOut={'slideOutLeft'}
                                  isVisible={this.state.isModalVisible}
                                  onBackdropPress={() =>
                                    this.setState({isModalVisible: false})
                                  }
                                  style={styles.modalPop}>
                                  <View style={styles.modalWrapper}>
                                    <Text style={styles.sender}>
                                      From:{' '}
                                      {this.props.context.viewer.firstName}
                                      <View style={styles.lineB} />
                                      {this.props.context.viewer.lastName}
                                    </Text>
                                    <TextInput
                                      onChangeText={text =>
                                        this.onChangeText(text)
                                      }
                                      value={this.text}
                                      style={styles.modalInput}
                                      placeholder={
                                        'I want to connect with you...'
                                      }
                                      keyboardType={'default'}
                                      multiline={true}
                                    />
                                    <View style={styles.modalBtn}>
                                      <Button
                                        title="Send"
                                        style={{width: '50%'}}
                                        onPress={() => {
                                          createConnection({
                                            variables: {
                                              message: this.state.text,
                                              senderId: this.props.context
                                                .viewer.id,
                                              receiverId: this.props.viewer.User
                                                .id,
                                              status: 'PENDING',
                                            },
                                          });
                                          this.setState({
                                            isModalVisible: false,
                                          });
                                        }}
                                      />
                                    </View>
                                  </View>
                                </Modal>
                              </Fragment>
                            );
                          }
                        }}
                      </Mutation>
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
                {!this.state.ownProfile && (
                  <View>
                    <TouchableOpacity onPress={this.toggleReportModal}>
                      <Text style={styles.report}>Report User</Text>
                    </TouchableOpacity>
                    <ReportUserModal
                      visible={this.state.isReportModalVisible}
                      toggleLogout={this.toggleReportModal}
                      report={this.reportUser}
                      navigation={this.props.navigation}
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
