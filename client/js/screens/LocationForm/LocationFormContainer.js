import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import LocationForm from './LocationForm';

const LocationFormContainer = () => {
  return (
    <SignUpContext.Consumer>
      {context => <LocationForm signUpContext={context} />}
    </SignUpContext.Consumer>
  );
};

export default LocationFormContainer;
