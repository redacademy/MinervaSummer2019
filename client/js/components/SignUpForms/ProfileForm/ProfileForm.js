import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitForm(values) {
    const {addLocationDetails} = this.props.signUpContext;
    addLocationDetails(values);
  }
  render() {
    return (
      <Form
        onSubmit={values => {
          this.submitForm(values);
        }}
        render={({handleSubmit, pristine}) => (
          <View>
            <Text style={styles.heading}>Profile Picture</Text>
            <Text style={styles.subHeading}>
              Please upload a recent picture of yourself so other women can see
              who you are. You can change your photo at any time.
            </Text>
            <GradientButton
              onPress={() => console.log('Take new')}
              text="Take New"
            />
            <GradientButton
              onPress={() => console.log('Upload')}
              text="Upload"
            />
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
                <TextInput
                  type={'text'}
                  multiline={true}
                  numberOfLines={6}
                  keyboardType={'default'}
                  placeholder={'Type here ...'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  {...input}
                />
              )}
            />
            <Text style={styles.heading}>Favourite Ways to Meet</Text>
            <Text style={styles.subHeading}>
              Choose your favourite or preferred ways to meet with others so we
              can connect you with other like minded women.
            </Text>
            <GradientButton onPress={() => handleSubmit()} text="Continue" />
            <TouchableOpacity style={styles.inputLabels}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

export default ProfileForm;
