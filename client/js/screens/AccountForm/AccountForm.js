import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
  }
  areEmailsDifferent(email, comfirmEmail) {
    return email !== comfirmEmail;
  }
  validate(values) {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = '*please enter your first  name';
    }
    if (!values.lastName) {
      errors.lastName = '*please enter your last name';
    }
    if (values.email !== values.comfirmEmail || !values.comfirmEmail) {
      errors.comfirmEmail = '*please enter matching emails';
    }
    if (!values.password) {
      errors.password = '*please enter a passsword';
    }
    return errors;
  }

  submitForm(values) {
    const {addAccountDetails} = this.props.signUpContext;
    this.validate(values);

    if (this.state.errors.length === 0) {
      addAccountDetails(values);
      this.props.navigation.navigate('Location');
    }
  }
  render() {
    return (
      <Form
        validate={values => this.validate(values)}
        onSubmit={values => {
          this.submitForm(values);
        }}
        render={({handleSubmit, pristine}) => (
          <View style={styles.root}>
            <Text style={styles.stepText}>Step 1 of 6</Text>
            <View style={styles.nameWrapper}>
              <View style={styles.nameFormWrapper}>
                <Text style={styles.inputLabels}>First Name</Text>
                <Field
                  name="firstName"
                  required={true}
                  render={({input, meta}) => (
                    <View>
                      <TextInput
                        type={'text'}
                        keyboardType={'default'}
                        placeholder={'First Name'}
                        style={styles.textInputs}
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
              </View>
              <View style={styles.nameFormWrapper}>
                <Text style={styles.inputLabels}>Last Name</Text>
                <Field
                  name="lastName"
                  required={true}
                  render={({input, meta}) => (
                    <View>
                      <TextInput
                        type={'text'}
                        keyboardType={'default'}
                        placeholder={'Last Name'}
                        style={styles.textInputs}
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
              </View>
            </View>
            <Text style={styles.inputLabels}>Email Adress</Text>
            <Field
              name="email"
              required={true}
              render={({input, meta}) => (
                <TextInput
                  type={'email'}
                  keyboardType={'email-address'}
                  placeholder={'Enter email adress'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  {...input}
                />
              )}
            />
            <Text style={styles.inputLabels}>Comfirm Email Adress</Text>
            <Field
              name="comfirmEmail"
              required={true}
              render={({input, meta}) => (
                <View>
                  <TextInput
                    type={'email'}
                    keyboardType={'email-address'}
                    placeholder={'Enter email adress'}
                    style={styles.textInputs}
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
            <Text style={styles.inputLabels}>Password</Text>
            <Field
              name="password"
              required={true}
              render={({input, meta}) => (
                <View>
                  <TextInput
                    type={'password'}
                    keyboardType={'default'}
                    placeholder={'Enter password'}
                    style={styles.textInputs}
                    autoCorrect={false}
                    secureTextEntry={true}
                    {...input}
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.errorMessage}>{meta.error}</Text>
                  )}
                </View>
              )}
            />
            <GradientButton
              onPress={() => handleSubmit()}
              text="Continue"></GradientButton>
          </View>
        )}
      />
    );
  }
}

export default withNavigation(AccountForm);
