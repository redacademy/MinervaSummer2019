import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import theme from '../../../config/theme';
import source from './source';

class FaveWays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: styles.icon,
      image: true,
    };
  }
  componentWillMount() {
    if (!this.props.item.visible) {
      this.setState({image: false});
    }
  }
  changeImage(index) {
    if (this.props.show) {
      this.props.updateWaysToMeet(index);
      this.setState({image: !this.state.image});
    }
  }
  render() {
    let {item, index} = this.props;

    return (
      <TouchableOpacity
        style={styles.icon}
        key={item.name}
        onPress={() => this.changeImage(index)}>
        <Image
          resizeMode={'center'}
          style={styles.toMeetImage}
          source={source[item.icon][this.state.image]}
          style={{maxHeight: 70}}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default FaveWays;
