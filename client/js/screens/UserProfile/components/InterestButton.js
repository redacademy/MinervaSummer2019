import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

let initialColor = styles.globe.backgroundColor;
let unSelectedColor = 'grey';

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
        this.props.info.title,
        this.props.index,
        this.props.interest,
      );
    }
  }
  render() {
    let {info, show} = this.props;

    return show || info.visible ? (
      <TouchableOpacity
        key={info.title}
        onPress={this.changeBackground.bind(this)}>
        <Text style={this.state.style}>{info.title}</Text>
      </TouchableOpacity>
    ) : (
      <Text style={{display: 'none'}}></Text>
    );
  }
}

export default InterestButton;
