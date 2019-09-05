import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailsDifferent: null,
    };
  }
  areEmailsDifferent(email, comfirmEmail) {
    return email !== comfirmEmail;
  }
  submitForm(values) {
    this.setState({emailsDifferent: false});
    const {addAccountDetails} = this.props.signUpContext;
    if (this.areEmailsDifferent(values.email, values.comfirmEmail)) {
      this.setState({emailsDifferent: true});
    } else {
      addAccountDetails(values);
    }
  }
  render() {
    return (
      <Form
        onSubmit={values => {
          this.submitForm(values);
        }}
        render={({handleSubmit, pristine}) => (
          <View>
            <Text style={styles.inputLabels}>First Name</Text>
            <Field
              name="firstName"
              required={true}
              render={({input, meta}) => (
                <TextInput
                  type={'text'}
                  keyboardType={'default'}
                  placeholder={'First Name'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  {...input}
                />
              )}
            />
            <Text style={styles.inputLabels}>Last Name</Text>
            <Field
              name="lastName"
              required={true}
              render={({input, meta}) => (
                <TextInput
                  type={'text'}
                  keyboardType={'default'}
                  placeholder={'Last Name'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  {...input}
                />
              )}
            />
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
            {this.state.emailsDifferent ? (
              <Text style={styles.errorMessage}>
                *Please enter matching emails
              </Text>
            ) : null}
            <Text style={styles.inputLabels}>Password</Text>
            <Field
              name="password"
              required={true}
              render={({input, meta}) => (
                <TextInput
                  type={'password'}
                  keyboardType={'default'}
                  placeholder={'Enter password'}
                  style={styles.textInputs}
                  autoCorrect={false}
                  secureTextEntry={true}
                  {...input}
                />
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

export default AccountForm;
