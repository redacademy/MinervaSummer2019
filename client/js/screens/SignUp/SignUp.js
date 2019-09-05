import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import {LocationForm} from '../../components/SignUpForms';

const SignUp = () => {
  return (
    <SignUpContext.Consumer>
      {context => <LocationForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default SignUp;
