import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import AccountForm from './AccountForm';

const AccountFormContainer = () => {
  return (
    <SignUpContext.Consumer>
      {context => {
        console.log(context);
        return <AccountForm signUpContext={context} />;
      }}
    </SignUpContext.Consumer>
  );
};

export default AccountFormContainer;
