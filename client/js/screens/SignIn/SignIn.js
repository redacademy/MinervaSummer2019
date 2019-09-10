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
import {storeToken} from '../../config/models';
import CircularLoader from '../../components/CircularLoader';

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
      errors: null,
    };
  }

  onSubmit = async (authenticateUser, values) => {
    this.setState({errors: null});
    try {
      const authenticateToken = await authenticateUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      console.log(authenticateToken);
      await storeToken(authenticateToken.data.authenticateUser);
      this.props.navigation.navigate('AuthLoading');
    } catch (e) {
      this.setState({errors: true});
    }
  };
  validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = '*please enter your email address';
    }
    if (!values.password) {
      errors.password = '*please enter your password';
    }
    return errors;
  }

  render() {
    return (
      <Mutation mutation={AUTHENTICATE_USER_MUTATION}>
        {(authenticateUser, {loading}) => {
          if (loading) {
            return <CircularLoader />;
          }
          return (
            <Form
              validate={values => this.validate(values)}
              onSubmit={values => {
                this.onSubmit(authenticateUser, values);
              }}
              render={({handleSubmit, pristine}) => (
                <View style={styles.root}>
                  <View style={styles.topInputs}>
                    <Text style={styles.inputLabels}>Email Address</Text>
                    <Field
                      name="email"
                      required={true}
                      render={({input, meta}) => (
                        <View>
                          <TextInput
                            type={'email'}
                            keyboardType={'email-address'}
                            placeholder={'Enter email address'}
                            style={styles.textInputs}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            {...input}
                          />
                          {meta.error && meta.touched && (
                            <Text style={styles.errorMessage}>
                              {meta.error}
                            </Text>
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
                            <Text style={styles.errorMessage}>
                              {meta.error}
                            </Text>
                          )}
                        </View>
                      )}
                    />
                  </View>
                  {this.state.errors ? (
                    <Text style={styles.errorMessage}>
                      Invalid email/password combination
                    </Text>
                  ) : null}
                  <View styel={styles.bottomButtons}>
                    <GradientButton
                      onPress={() => handleSubmit()}
                      text="Sign In"></GradientButton>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('SignUp');
                      }}>
                      <Text style={styles.signUp}>
                        Dont have an account? Sign up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          );
        }}
      </Mutation>
    );
  }
}

export default withNavigation(SignIn);
