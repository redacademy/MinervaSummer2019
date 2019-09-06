import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import SelectableChips from 'react-native-chip/SelectableChips';
import {withNavigation} from 'react-navigation';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import AsyncStorage from '@react-native-community/async-storage';
import {storeToken} from '../../config/models';

const AUTHENTICATE_USER_MUTATION = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $bio: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $location: String
    $lookingFor: String!
    $password: String!
    $school: String
    $waysToMeet: [String!]
    $interestsIds: [ID!]
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      bio: $bio
      location: $location
      school: $school
      password: $password
      interestsIds: $interestsIds
      lookingFor: $lookingFor
      waysToMeet: $waysToMeet
    ) {
      email
      password
    }
  }
`;

class ProfessionalInterestsForm extends React.Component {
  storeToken = async userToken => {
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch (e) {
      throw Error(e);
    }
  };
  addChips(interestTitles) {
    const {addProfessionalInterests} = this.props.signUpContext;
    const interestIds = this.props.allInterests
      .filter(interest => interestTitles.includes(interest.title))
      .map(interest => interest.id);
    addProfessionalInterests(interestIds);
  }
  async submitForm(authenticateUser, createUser) {
    const context = this.props.signUpContext.formValues;

    let newUserObject = {
      ...context,
      interestsIds: context.professionalInterests.concat(
        context.personalInterests,
      ),
    };
    delete newUserObject.personalInterests;
    delete newUserObject.professionalInterests;
    try {
      const newUser = await createUser({variables: newUserObject});
      const {email, password} = newUser.data.createUser;
      const authenticateToken = await authenticateUser({
        variables: {
          email: email,
          password: password,
        },
      });

      await storeToken(authenticateToken.data.authenticateUser);
      this.props.navigation.navigate('AuthLoading');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {allInterests} = this.props;
    const professionalInterests = allInterests.filter(
      interest => interest.type === 'Professional',
    );
    return (
      <ScrollView style={styles.root}>
        <Text style={styles.stepText}>Step 6 of 6</Text>
        <Text style={styles.heading}>Professional Interests</Text>
        <Text style={styles.subHeading}>
          By selecting your professional interests we can connect you with other
          women who have similar interest. /n Please select some of our
          professional interests below. You can add or edit new ones t anytime
          on your profile page.
        </Text>
        <View style={styles.chipsWrapper}>
          <Text style={styles.chipsHeading}>Professional Interests</Text>
          <SelectableChips
            initialChips={professionalInterests.map(interest => interest.title)}
            onChangeChips={chips => this.addChips(chips)}
            alertRequired={false}
            chipStyle={styles.chip}
            valueStyle={styles.chipText}
            chipStyleSelected={styles.chipSelected}
            valueStyleSelected={styles.chipTextSelected}
          />
        </View>
        <Mutation mutation={AUTHENTICATE_USER_MUTATION}>
          {authenticateUser => (
            <Mutation mutation={CREATE_USER_MUTATION}>
              {createUser => (
                <GradientButton
                  onPress={() => this.submitForm(authenticateUser, createUser)}
                  text="Continue"
                />
              )}
            </Mutation>
          )}
        </Mutation>
      </ScrollView>
    );
  }
}

export default withNavigation(ProfessionalInterestsForm);
