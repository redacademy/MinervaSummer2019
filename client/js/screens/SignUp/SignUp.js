import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import {LookingForForm} from '../../components/SignUpForms';

const SignUp = () => {
  return (
    <SignUpContext.Consumer>
      {context => <LookingForForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default SignUp;
