import React from 'react';
import SignUpContext from '../../context/SignUpContext';
import ProfileForm from './ProfileForm';
import {TouchableOpacity, Text} from 'react-native-gesture-handler';

class ProfileFormContainer extends React.Component {
  static navigationOptions = {
    title: 'Profile Details',
  };
  render() {
    return (
      <SignUpContext.Consumer>
        {context => <ProfileForm signUpContext={context} />}
      </SignUpContext.Consumer>
    );
  }
}

export default ProfileFormContainer;
