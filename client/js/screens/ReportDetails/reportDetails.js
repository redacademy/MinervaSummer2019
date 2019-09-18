import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class ReportDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      report: '',
    };
  }
  submitForm() {
    this.setState({error: false});
    this.props.navigation.navigate('Profile');
  }

  reportInformation = info => {
    this.setState({report: info});
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.stepText}>Step 2 of 2</Text>

        <Text style={styles.heading}>Report Message</Text>

        <View style={styles.selectWrapper}>
          <TextInput
            style={styles.TI}
            placeholder={
              'Please type out your report message here with additional details...'
            }
            multiline={true}
            numberOfLines={20}
            maxLength={1000}
            onBlur={Keyboard.dismiss}
            onChangeText={input => this.reportInformation(input)}></TextInput>
        </View>
        <GradientButton onPress={() => this.submitForm()} text="Continue" />
      </View>
    );
  }
}

export default withNavigation(ReportDetails);
