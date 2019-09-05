import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import {ProfessionalInterestsForm} from '../../components/SignUpForms';

const SignUp = () => {
  return (
    <SignUpContext.Consumer>
      {context => <ProfessionalInterestsForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default SignUp;
