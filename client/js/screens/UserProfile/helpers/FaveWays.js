import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import theme from '../../../config/theme';

let initialColor = 'black';
let unSelectedColor = 'grey';
class FaveWays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: styles.icon,
      color: initialColor,
    };
  }
  componentWillMount() {
    if (!this.props.item.visible) {
      this.setState({
        color: unSelectedColor,
      });
    }
  }
  changeBackground(index) {
    this.props.updateWaysToMeet(index);
    this.setState({
      color:
        this.state.color === unSelectedColor ? initialColor : unSelectedColor,
    });
  }
  render() {
    let {item, index} = this.props;
    return (
      <TouchableOpacity
        style={styles.icon}
        key={item.name}
        onPress={() => this.changeBackground(index)}>
        <Ionics name={item.icon} size={25} color={this.state.color} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default FaveWays;
