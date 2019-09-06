import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitForm(values) {
    const {addLocationDetails} = this.props.signUpContext;
    addLocationDetails(values);
    this.props.navigation.navigate('LookingFor');
  }
  render() {
    return (
      <Form
        onSubmit={values => {
          this.submitForm(values);
        }}
        render={({handleSubmit, pristine}) => (
          <View>
            <Text style={styles.inputLabels}>Location (Optional)</Text>
            <Field
              name="location"
              required={true}
              render={({input, meta}) => (
                <TextInput
                  type={'text'}
                  keyboardType={'default'}
                  placeholder={'Enter Location(City)'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  {...input}
                />
              )}
            />
            <Text style={styles.inputLabels}>School/University (Optional)</Text>
            <Field
              name="school"
              required={true}
              render={({input, meta}) => (
                <TextInput
                  type={'text'}
                  keyboardType={'default'}
                  placeholder={'Enter school/university'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  {...input}
                />
              )}
            />
            <Text>
              This information is used to connect you with people near you.
              MinervaConnect will never use this information for anything else
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

export default withNavigation(LocationForm);
