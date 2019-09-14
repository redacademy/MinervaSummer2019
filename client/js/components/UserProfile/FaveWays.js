import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../../screens/UserProfile/styles';

let source = {
  coffee: {
    true: require(`../../assets/PNG/ways_to_meet/coffee_active.png`),
    false: require(`../../assets/PNG/ways_to_meet/coffee_inactive.png`),
  },
  after_school: {
    true: require(`../../assets/PNG/ways_to_meet/after_school_active.png`),
    false: require(`../../assets/PNG/ways_to_meet/after_school_inactive.png`),
  },
  lunch: {
    true: require(`../../assets/PNG/ways_to_meet/lunch_active.png`),
    false: require(`../../assets/PNG/ways_to_meet/lunch_inactive.png`),
  },
  walk: {
    true: require(`../../assets/PNG/ways_to_meet/walk_active.png`),
    false: require(`../../assets/PNG/ways_to_meet/walk_inactive.png`),
  },
};

class FaveWays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: styles.icon,
      image: true,
    };
  }
  componentDidMount() {
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
    let {item, index, show} = this.props;
    return show || item.visible ? (
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
    ) : (
      <Text style={{display: 'none'}}></Text>
    );
  }
}

export default FaveWays;
