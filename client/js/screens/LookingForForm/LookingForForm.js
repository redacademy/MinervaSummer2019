import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class LocationForm extends React.Component {
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
      const {addLookingFor} = this.props.signUpContext;
      addLookingFor(this.state.selected);
      this.props.navigation.navigate('ProfileForm');
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
        <Text style={styles.stepText}>Step 3 of 6</Text>

        <Text style={styles.heading}>I am looking to...</Text>
        <Text style={styles.subHeading}>
          (please select one option that fits you best)
        </Text>
        {this.createSelectChip('Decide Later', 'Undecided')}
        {this.createSelectChip('Be a mentor', 'Mentor')}
        {this.createSelectChip('Be a mentee', 'Mentee')}
        {this.state.error ? (
          <Text style={styles.errorMessage}>*please select one option</Text>
        ) : null}
        <GradientButton onPress={() => this.submitForm()} text="Continue" />
      </View>
    );
  }
}

export default withNavigation(LocationForm);
