import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';
import SelectableChips from 'react-native-chip/SelectableChips';

class ProfessionalInterestsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professionalInterests: [],
    };
  }
  submitForm() {
    const {addProfessionalInterests} = this.props.signUpContext;
    const interestTitles = [...this.state.professionalInterests];
    const interestIds = this.props.allInterests
      .filter(interest => interestTitles.includes(interest.title))
      .map(interest => interest.id);
    addProfessionalInterests(interestIds);
    console.log(this.props.signUpContext);
  }

  render() {
    const {allInterests} = this.props;
    const professionalInterests = allInterests.filter(
      interest => interest.type === 'Professional',
    );
    return (
      <ScrollView>
        <Text style={styles.heading}>Professional Interests</Text>
        <Text style={styles.subHeading}>
          By selecting your professional interests we can connect you with other
          women who have similar interest.
        </Text>
        <Text style={styles.subHeading}>
          Please select some of our professional interests below. You can add or
          edit new ones t anytime on your profile page.
        </Text>
        <View style={styles.chipsWrapper}>
          <Text style={styles.chipsHeading}>Professional Interests</Text>
          <SelectableChips
            initialChips={professionalInterests.map(interest => interest.title)}
            onChangeChips={chips =>
              this.setState({professionalInterests: chips})
            }
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

export default ProfessionalInterestsForm;
