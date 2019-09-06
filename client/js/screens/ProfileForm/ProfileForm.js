import React from 'react';
import {Form, Field} from 'react-final-form';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {withNavigation} from 'react-navigation';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: false,
      lunch: false,
      afterSchool: false,
      aWalk: false,
    };
  }
  submitForm(values) {
    const {addProfileDetails} = this.props.signUpContext;
    const waysToMeet = Object.keys(this.state);
    const selectedWaysToMeet = waysToMeet.filter(
      wayToMeet => this.state[wayToMeet] === true,
    );
    addProfileDetails({...values, waysToMeet: selectedWaysToMeet});
    this.props.navigation.navigate('PersonalInterests');
  }
  selectWayToMeet(target) {
    this.setState({[target]: !this.state[target]});
  }
  pickImage = () => {
    const options = {
      title: 'Select Profile Picture',
    };
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let uri = response.uri;
        this.setState({imageUri: response.uri});
        if (Platform.OS === 'ios') uri.replace('file://', '');
      }
    });
  };
  validate(values) {
    const errors = {};

    if (!values.bio) {
      errors.bio = '*please tell us a little bit about yourself';
    }
    return errors;
  }
  render() {
    return (
      <Form
        validate={values => this.validate(values)}
        onSubmit={values => {
          this.submitForm(values);
        }}
        render={({handleSubmit, pristine}) => (
          <ScrollView style={styles.root}>
            <Text style={styles.stepText}>Step 4 of 6</Text>

            <Text style={styles.heading}>Profile Picture</Text>
            <Text style={styles.subHeading}>
              Please upload a recent picture of yourself so other women can see
              who you are. You can change your photo at any time.
            </Text>
            <Image
              style={styles.profilePicture}
              source={
                this.state.imageUri
                  ? {uri: this.state.imageUri}
                  : require('../../assets/PNG/additional_illustrations/profile.png')
              }
            />
            <View style={styles.imageButtonsWrapper}>
              <GradientButton
                onPress={() => this.pickImage()}
                text="Take New"
                variant="outlined"
              />
              <GradientButton onPress={() => this.pickImage()} text="Upload" />
            </View>
            <Text style={styles.heading}>About Me</Text>
            <Text style={styles.subHeading}>
              Tell us a little bit about yourself so people can get to know you!
              Write about what you love, your favourite food, your career, or
              whatever comes to mind.
            </Text>
            <Field
              name="bio"
              required={true}
              render={({input, meta}) => (
                <View>
                  <TextInput
                    style={styles.bioInput}
                    type={'text'}
                    multiline={true}
                    numberOfLines={6}
                    keyboardType={'default'}
                    placeholder={'Type here ...'}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    {...input}
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.errorMessage}>{meta.error}</Text>
                  )}
                </View>
              )}
            />
            <Text style={styles.heading}>Favourite Ways to Meet</Text>
            <Text style={styles.subHeading}>
              Choose your favourite or preferred ways to meet with others so we
              can connect you with other like minded women.
            </Text>
            <View style={styles.toMeetWrapper}>
              <TouchableOpacity onPress={() => this.selectWayToMeet('coffee')}>
                <Text
                  style={
                    this.state.coffee
                      ? styles.toMeetActive
                      : styles.toMeetInactive
                  }>
                  Coffee
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectWayToMeet('afterSchool')}>
                <Text
                  style={
                    this.state.afterSchool
                      ? styles.toMeetActive
                      : styles.toMeetInactive
                  }>
                  After School
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectWayToMeet('lunch')}>
                <Text
                  style={
                    this.state.lunch
                      ? styles.toMeetActive
                      : styles.toMeetInactive
                  }>
                  Lunch
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectWayToMeet('aWalk')}>
                <Text
                  style={
                    this.state.aWalk
                      ? styles.toMeetActive
                      : styles.toMeetInactive
                  }>
                  A Walk
                </Text>
              </TouchableOpacity>
            </View>
            <GradientButton onPress={() => handleSubmit()} text="Continue" />
            <TouchableOpacity
              style={styles.inputLabels}
              onPress={() => {
                this.props.navigation.navigate('PersonalInterests');
              }}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      />
    );
  }
}

export default withNavigation(ProfileForm);
