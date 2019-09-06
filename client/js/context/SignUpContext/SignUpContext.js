import React, {Component} from 'react';
const SignUpContext = React.createContext();

class SignUpProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      location: null,
      school: null,
      lookingFor: null,
      waysToMeet: [],
      bio: null,
      personalInterests: [],
      professionalInterests: [],
    };
  }
  addAccountDetails = values => {
    const {firstName, lastName, password, email} = values;
    this.setState({firstName, lastName, email, password});
  };

  addLocationDetails = values => {
    const {location, school} = values;
    this.setState({location: location, school: school});
  };

  addLookingFor = lookingFor => {
    this.setState({lookingFor});
  };

  addProfileDetails = values => {
    const {bio, waysToMeet} = values;
    this.setState({bio, waysToMeet});
  };

  addPersonalInterests = interests => {
    this.setState({personalInterests: interests});
  };
  addProfessionalInterests = interests => {
    this.setState({professionalInterests: interests});
  };

  render() {
    return (
      <SignUpContext.Provider
        value={{
          ...this.state,
          addProfileDetails: this.addProfileDetails,
          addPersonalInterests: this.addPersonalInterests,
          addProfessionalInterests: this.addProfessionalInterests,
          addLookingFor: this.addLookingFor,
          addLocationDetails: this.addLocationDetails,
          addAccountDetails: this.addAccountDetails,
        }}>
        {this.props.children}
      </SignUpContext.Provider>
    );
  }
}

export {SignUpProvider};
export default SignUpContext;
