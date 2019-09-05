import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

export default class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
    );
  }
}
