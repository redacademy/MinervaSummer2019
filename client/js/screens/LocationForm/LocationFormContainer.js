import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import LocationForm from './LocationForm';

class LocationFormContainer extends React.Component {
  static navigationOptions = {
    title: 'Account Details',
  };
  render() {
    return (
      <SignUpContext.Consumer>
        {context => <LocationForm signUpContext={context} />}
      </SignUpContext.Consumer>
    );
  }
}

export default LocationFormContainer;
