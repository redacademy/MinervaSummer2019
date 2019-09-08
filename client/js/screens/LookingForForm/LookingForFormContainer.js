import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import LookingForForm from './LookingForForm';

class LookingForFormContainer extends React.Component {
  static navigationOptions = {
    title: 'Account Details',
  };
  render() {
    return (
      <SignUpContext.Consumer>
        {context => <LookingForForm signUpContext={context} />}
      </SignUpContext.Consumer>
    );
  }
}

export default LookingForFormContainer;
