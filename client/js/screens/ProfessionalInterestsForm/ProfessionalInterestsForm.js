import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import GradientButton from '../../components/GradientButton';
import CircularLoader from '../../components/CircularLoader';
import styles from './styles';
import SelectableChips from 'react-native-chip/SelectableChips';
import {withNavigation} from 'react-navigation';
import {Mutation} from '@apollo/react-components';
import AsyncStorage from '@react-native-community/async-storage';
import {storeToken} from '../../config/models';
import {AUTHENTICATE_USER_MUTATION} from '../../config/apollo/queries'
import {CREATE_USER_MUTATION} from '../../config/apollo/queries'

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
      <Mutation mutation={AUTHENTICATE_USER_MUTATION}>
        {(authenticateUser, {loading}) => {
          if (loading) {
            return <CircularLoader />;
          }
          return (
            <Mutation mutation={CREATE_USER_MUTATION}>
              {(createUser, {loading}) =>
                loading ? (
                  <CircularLoader></CircularLoader>
                ) : (
                  <ScrollView style={styles.root}>
                    <Text style={styles.stepText}>Step 6 of 6</Text>
                    <Text style={styles.heading}>Professional Interests</Text>
                    <Text style={styles.subHeading}>
                      By selecting your professional interests we can connect
                      you with other women who have similar interest. /n Please
                      select some of our professional interests below. You can
                      add or edit new ones t anytime on your profile page.
                    </Text>
                    <View style={styles.chipsWrapper}>
                      <Text style={styles.chipsHeading}>
                        Professional Interests
                      </Text>
                      <SelectableChips
                        initialChips={professionalInterests.map(
                          interest => interest.title,
                        )}
                        onChangeChips={chips => this.addChips(chips)}
                        alertRequired={false}
                        chipStyle={styles.chip}
                        valueStyle={styles.chipText}
                        chipStyleSelected={styles.chipSelected}
                        valueStyleSelected={styles.chipTextSelected}
                      />
                    </View>
                    <View style={styles.buttonWrapper}>
                      <GradientButton
                        style={styles.button}
                        width="80%"
                        onPress={() =>
                          this.submitForm(authenticateUser, createUser)
                        }
                        text="Continue"
                      />
                    </View>
                  </ScrollView>
                )
              }
            </Mutation>
          );
        }}
      </Mutation>
    );
  }
}

export default withNavigation(ProfessionalInterestsForm);
