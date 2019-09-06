import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import LookingForForm from './LookingForForm';

const LookingForFormContainer = () => {
  return (
    <SignUpContext.Consumer>
      {context => <LookingForForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default LookingForFormContainer;
