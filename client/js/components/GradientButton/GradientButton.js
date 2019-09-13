import React from 'react';
import theme from '../../config/theme';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({text, onPress, variant, width}) => {
  return (
    <TouchableOpacity
      opacity={0.8}
      style={[styles.button, {width: width}]}
      onPress={onPress}>
      <LinearGradient
        colors={[theme.palette.green, theme.palette.blue]}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[
          styles.gradient,
          variant === 'squared' ? {borderRadius: 0} : null,
        ]}
      />
      <Text
        style={
          variant === 'outlined' ? styles.buttonTextOutlined : styles.buttonText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default GradientButton;

GradientButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['outlined', 'contained', 'squared']),
  textStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};
