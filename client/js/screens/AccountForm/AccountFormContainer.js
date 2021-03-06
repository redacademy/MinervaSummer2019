import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import AccountForm from './AccountForm';

class AccountFormContainer extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <SignUpContext.Consumer>
        {context => <AccountForm signUpContext={context} />}
      </SignUpContext.Consumer>
    );
  }
}

export default AccountFormContainer;
