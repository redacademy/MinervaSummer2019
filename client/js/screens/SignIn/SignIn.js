import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';
import GradientButton from '../../components/GradientButton';

const AUTHENTICATE_USER_MUTATION = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: undefined,
    };
  }
  storeToken = async userToken => {
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch (e) {
      throw Error(e);
    }
  };

  onSubmit = async (authenticateUser, values) => {
    try {
      const authenticateToken = await authenticateUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      await this.storeToken(authenticateToken.data.authenticateUser);
      this.props.navigation.navigate('AuthLoading');
      //update viewer context provider and query user data
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.root}>
        <Mutation mutation={AUTHENTICATE_USER_MUTATION}>
          {authenticateUser => (
            <Form
              onSubmit={values => {
                this.onSubmit(authenticateUser, values);
              }}
              render={({handleSubmit, pristine}) => (
                <View>
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
                    text="Sign In"></GradientButton>
                </View>
              )}
            />
          )}
        </Mutation>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}>
          <Text style={styles.signUp}>Dont have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SignIn);
