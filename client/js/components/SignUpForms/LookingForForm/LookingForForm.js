import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../GradientButton';
import styles from './styles';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  submitForm() {
    const {addLookingFor} = this.props.signUpContext;
    addLookingFor(this.state.selected);
  }
  selectOption(selected) {
    this.setState({selected});
  }
  render() {
    return (
      <View>
        <Text style={styles.heading}>I am looking to...</Text>
        <Text style={styles.subHeading}>
          (please select one option that fits you best)
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={
            this.state.selected === 'mentor'
              ? styles.selected
              : styles.notSelected
          }
          onPress={() => this.selectOption('mentor')}>
          <Text>Be a mentor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={
            this.state.selected === 'mentee'
              ? styles.selected
              : styles.notSelected
          }
          onPress={() => this.selectOption('mentee')}>
          <Text>Be a mentee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={
            this.state.selected === 'undecided'
              ? styles.selected
              : styles.notSelected
          }
          onPress={() => this.selectOption('undecided')}>
          <Text>Decide later</Text>
        </TouchableOpacity>
        <GradientButton onPress={() => this.submitForm()} text="Continue" />
      </View>
    );
  }
}

export default LocationForm;
