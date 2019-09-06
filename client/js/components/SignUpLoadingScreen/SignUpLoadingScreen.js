import React from 'react';
import {Text, View} from 'react-native';
import CircularLoader from '../CircularLoader';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import SignUpContext from '../../context/SignUpContext';

const AUTHENTICATE_USER_MUTATION = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $bio: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $location: String
    $lookingFor: String!
    $password: String!
    $school: String
    $waysToMeet: [String]!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      bio: $bio
      location: $location
      school: $school
      password: $password
      interestsIds: $interests
      lookingFor: $lookingFor
    ) {
      email
      password
    }
  }
`;

const SignUp = () => {
  const signUp = (context, authenticateUser, createUser) => {};
  return (
    <View>
      <SignUpContext.Consumer>
        {context => {
          <Mutation mutation={AUTHENTICATE_USER_MUTATION}>
            {authenticateUser => (
              <Mutation mutation={CREATE_USER_MUTATION}>
                {createUser => signUp(context, authenticateUser, createUser)}
              </Mutation>
            )}
          </Mutation>;
        }}
      </SignUpContext.Consumer>
      <CircularLoader />
    </View>
  );
};

export default SignUp;
