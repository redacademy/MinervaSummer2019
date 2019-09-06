import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import ProfileForm from './ProfileForm';

const ProfileFormContainer = () => {
  return (
    <SignUpContext.Consumer>
      {context => <ProfileForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default ProfileFormContainer;
