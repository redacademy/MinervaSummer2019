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
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.palette.mediumGrey,
  },
  button: {
    width: '100%',
  },
  buttonWrapper: {
    justifyContent: 'space-between',
    height: '20%',
    width: '100%',
  },
});

export default styles;
