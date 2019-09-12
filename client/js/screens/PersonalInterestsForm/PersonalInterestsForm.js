import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import SelectableChips from 'react-native-chip/SelectableChips';
import {withNavigation} from 'react-navigation';

class PersonalInterestsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInterests: [],
      socialInterests: [],
      pristine: true,
    };
  }
  submitForm() {
    this.setState({pristine: false});
    const {addPersonalInterests} = this.props.signUpContext;
    const interestTitles = [
      ...this.state.personalInterests,
      ...this.state.socialInterests,
    ];
    if (interestTitles.length < 3) {
      return;
    }
    const interestIds = this.props.allInterests
      .filter(interest => interestTitles.includes(interest.title))
      .map(interest => interest.id);
    addPersonalInterests(interestIds);
    this.props.navigation.navigate('ProfessionalInterests');
  }

  render() {
    const {allInterests} = this.props;
    const personalInterests = allInterests.filter(
      interest => interest.type === 'Personal',
    );
    const socialInterests = allInterests.filter(
      interest => interest.type === 'Social',
    );
    return (
      <ScrollView style={styles.root}>
        <Text style={styles.stepText}>Step 5 of 6</Text>
        <Text style={styles.heading}>Personal Interests</Text>
        <Text style={styles.subHeading}>
          By selecting your personal interests we can connect you with other
          women who have similar interest. /n Please select some of our personal
          interests below. You can add or edit new ones t anytime on your
          profile page.
        </Text>
        <View style={styles.chipsWrapper}>
          <Text style={styles.chipsHeading}>Personal Interests</Text>
          <SelectableChips
            initialChips={personalInterests.map(interest => interest.title)}
            onChangeChips={chips => this.setState({personalInterests: chips})}
            alertRequired={false}
            chipStyle={styles.chip}
            valueStyle={styles.chipText}
            chipStyleSelected={styles.chipSelected}
            valueStyleSelected={styles.chipTextSelected}
          />
        </View>
        <View style={styles.chipsWrapper}>
          <Text style={styles.chipsHeading}>Social Interests</Text>
          <SelectableChips
            initialChips={socialInterests.map(interest => interest.title)}
            onChangeChips={chips => this.setState({socialInterests: chips})}
            alertRequired={false}
            chipStyle={styles.chip}
            valueStyle={styles.chipText}
            chipStyleSelected={styles.chipSelected}
            valueStyleSelected={styles.chipTextSelected}
          />
        </View>
        {!this.state.pristine &&
        this.state.personalInterests.length + this.state.socialInterests < 3 ? (
          <Text style={styles.error}>*please select at least 3 interests</Text>
        ) : null}
        <View style={styles.buttonWrapper}>
          <GradientButton
            style={styles.button}
            width="80%"
            onPress={() => this.submitForm()}
            text="Continue"
          />
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(PersonalInterestsForm);
