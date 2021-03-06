import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionics from 'react-native-vector-icons/Ionicons';
import theme from '../../config/theme';

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
          <View style={styles.root}>
            <View>
              <Text style={styles.stepText}>Step 2 of 6</Text>
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
              <Text style={styles.inputLabels}>
                School/University (Optional)
              </Text>
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
              <View style={styles.infoWrapper}>
                <Ionics
                  name={'ios-information-circle'}
                  size={20}
                  color={theme.palette.blue}
                />
                <Text style={styles.infoText}>
                  This information is used to connect you with people near you.
                  MinervaConnect will never use this information for anything
                  else
                </Text>
              </View>
            </View>
            <View>
              <GradientButton onPress={() => handleSubmit()} text="Continue" />
              <TouchableOpacity
                style={styles.inputLabels}
                onPress={() => {
                  this.props.navigation.navigate('LookingFor');
                }}>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  }
}

export default withNavigation(LocationForm);
