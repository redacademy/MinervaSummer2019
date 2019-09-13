import React from 'react';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import ProfessionalInterestsForm from './ProfessionalInterestsForm';
import SignUpContext from '../../context/SignUpContext';
import {ALL_INTERESTS} from '../../config/apollo/queries'

class ProfessionalInterestsContainer extends React.Component {
  static navigationOptions = {
    title: 'Professional Interests',
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
                <ProfessionalInterestsForm
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

export default ProfessionalInterestsContainer;
