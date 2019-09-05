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
      howToMeet: null,
      aboutMe: null,
      interests: [],
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

  addPersonalDetails = (howToMeet, aboutMe) => {
    this.setState({howToMeet, aboutMe});
  };

  addInterests = interests => {
    this.setState({interests});
  };
  render() {
    return (
      <SignUpContext.Provider
        value={{
          ...this.state,
          addPersonalDetails: this.addPersonalDetails,
          addInterests: this.addInterests,
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
