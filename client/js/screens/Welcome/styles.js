import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '10%',
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: '5%',
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.palette.mediumGrey,
    fontFamily: theme.fonts.regular,
    color: theme.palette.darkGrey,
  },
  button: {
    width: '100%',
  },
  buttonWrapper: {
    justifyContent: 'space-between',
    height: '20%',
    width: '100%',
  },
  logo: {
    width: '70%',
    height: '35%',
    resizeMode: 'contain',
  },
});

export default styles;
