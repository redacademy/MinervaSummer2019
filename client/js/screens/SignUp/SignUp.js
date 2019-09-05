import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import AccountForm from '../../components/SignUpForms';

const SignUp = () => {
  return (
    <SignUpContext.Consumer>
      {context => <AccountForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default SignUp;
