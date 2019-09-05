import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Platform} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitForm(values) {
    const {addLocationDetails} = this.props.signUpContext;
    addLocationDetails(values);
  }
  pickImage = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
      },
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

        // RNFetchBlob.fetch(
        //   'POST',
        //   `https://api.graph.cool/file/v1/$ck046a89w0kut01791rwn3vw9`,
        //   {},
        //   [
        //     {
        //       name: 'data',
        //       filename: 'image',
        //       data: RNFetchBlob.wrap(uri),
        //     },
        //   ],
        // )
        //   .then(res => {
        //     let status = res.info().status;
        //     console.log(status);
        //   })
        //   .catch(e => {
        //     console.log(e);
        //   });
      }
    });
  };
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
            {this.state.imageUri ? (
              <Image
                style={{width: 50, height: 50}}
                source={{uri: this.state.imageUri}}
              />
            ) : null}
            <View style={styles.imageButtonsWrapper}>
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
