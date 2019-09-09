import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import theme from '../../../config/theme';

let initialColor = styles.globe.backgroundColor;
let unSelectedColor = 'grey';
let removeIcon = <Ionics name={`ios-close-circle`} style={styles.removeIcon} />;

class InterestButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: styles.globe,
    };
  }
  componentWillMount() {
    this.props.info.visible
      ? ''
      : this.setState(prevState => ({
          style: {
            ...prevState.style,
            backgroundColor: unSelectedColor,
          },
        }));
  }
  changeBackground() {
    if (this.props.show) {
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          backgroundColor:
            this.state.style.backgroundColor === initialColor
              ? unSelectedColor
              : initialColor,
        },
      }));
      this.props.updateInterest(
        this.props.info.name,
        this.props.index,
        this.props.interest,
      );
    }
  }
  render() {
    let {info, show} = this.props;

    return show || info.visible ? (
      <TouchableOpacity
        key={info.name}
        onPress={this.changeBackground.bind(this)}>
        <Text style={this.state.style}>{info.name}</Text>
      </TouchableOpacity>
    ) : (
      <Text style={{display: 'none'}}></Text>
    );
  }
}

export default InterestButton;
