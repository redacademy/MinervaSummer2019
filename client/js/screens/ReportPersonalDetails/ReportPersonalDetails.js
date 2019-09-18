import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class ReportPersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      error: false,
    };
  }
  submitForm() {
    this.setState({error: false});
    if (this.state.selected !== null) {
      this.props.navigation.navigate('Report');
    } else {
      this.setState({error: true});
    }
  }
  selectOption(selected) {
    this.setState({selected});
  }
  createSelectChip = (message, value) => (
    <TouchableOpacity
      activeOpacity={0.6}
      style={
        this.state.selected === value ? styles.selected : styles.notSelected
      }
      onPress={() => this.selectOption(value)}>
      <Text
        style={
          this.state.selected === value
            ? styles.textSelected
            : styles.textNotSelected
        }>
        {message}
      </Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.stepText}>Step 1 of 2</Text>

        <View style={styles.selectWrapper}>
          {this.createSelectChip('Harrasment/Bullying', 'Harrasment/Bullying')}
          {this.createSelectChip(
            'Posting Innapropiate Content',
            'Innapropiate',
          )}
          {this.createSelectChip('Other', 'Other')}
          {this.state.error ? (
            <Text style={styles.errorMessage}>*please select one option</Text>
          ) : null}
        </View>
        <GradientButton onPress={() => this.submitForm()} text="Continue" />
      </View>
    );
  }
}

export default withNavigation(ReportPersonalForm);
