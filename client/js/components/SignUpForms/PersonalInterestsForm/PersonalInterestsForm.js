import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';
import SelectableChips from 'react-native-chip/SelectableChips';

class PersonalInterestsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInterests: [],
      socialInterests: [],
    };
  }
  submitForm() {
    console.log(this.state);
    const {addPersonalInterests} = this.props.signUpContext;
    const interestTitles = [
      ...this.state.personalInterests,
      ...this.state.socialInterests,
    ];
    const interestIds = this.props.allInterests
      .filter(interest => interestTitles.includes(interest.title))
      .map(interest => interest.id);
    addPersonalInterests(interestIds);
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
      <ScrollView>
        <Text style={styles.heading}>Personal Interests</Text>
        <Text style={styles.subHeading}>
          By selecting your personal interests we can connect you with other
          women who have similar interest.
        </Text>
        <Text style={styles.subHeading}>
          Please select some of our personal interests below. You can add or
          edit new ones t anytime on your profile page.
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

        <GradientButton onPress={() => this.submitForm()} text="Continue" />
      </ScrollView>
    );
  }
}

export default PersonalInterestsForm;
