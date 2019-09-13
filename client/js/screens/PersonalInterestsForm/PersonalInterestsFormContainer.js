import React from 'react';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import PersonalInterestsForm from './PersonalInterestsForm';
import SignUpContext from '../../context/SignUpContext';
import {ALL_INTERESTS} from '../../config/apollo/queries'

class PersonalInterestsContainer extends React.Component {
  static navigationOptions = {
    title: 'Personal Interests',
  };
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <Query query={ALL_INTERESTS}>
            {({loading, error, data}) => {
              if (loading) {
                return <CircularLoader />;
              }
              if (error) {
                return <Text>{error}</Text>;
              }
              return (
                <PersonalInterestsForm
                  allInterests={data.allInterests}
                  signUpContext={context}
                />
              );
            }}
          </Query>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default PersonalInterestsContainer;
