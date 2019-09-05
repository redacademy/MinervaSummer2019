import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import {ProfileForm} from '../../components/SignUpForms';

const SignUp = () => {
  return (
    <SignUpContext.Consumer>
      {context => <ProfileForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default SignUp;
