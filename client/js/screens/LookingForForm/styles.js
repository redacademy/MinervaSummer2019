import {StyleSheet} from 'react-native';
import theme from '../../config/theme';
import {ThemeColors} from 'react-navigation';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    width: '100%',
    padding: '10%',
    paddingTop: '5%',
  },
  stepText: {
    textAlign: 'center',
    marginBottom: '5%',
    color: theme.palette.mediumGrey,
  },
  inputLabels: {
    color: theme.palette.blue,
    marginTop: '10%',
  },
  notSelected: {
    padding: '5%',
    borderColor: theme.palette.darkGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '5%',
  },
  selected: {
    padding: '5%',
    backgroundColor: theme.palette.blue,
    borderColor: theme.palette.blue,
    borderWidth: 1,
    color: 'white',
    borderRadius: 5,
    marginBottom: '5%',
  },
  textNotSelected: {
    color: theme.palette.mediumGrey,
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
  },
  textSelected: {
    color: 'white',
    textAlign: 'center',
    fontFamily: theme.fonts.heavy,
  },
  skip: {
    textAlign: 'center',
  },
  errorMessage: {
    color: theme.palette.red,
  },
  heading: {
    color: theme.palette.blue,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: theme.fonts.heavy,
    marginTop: '5%',
  },
  subHeading: {
    color: theme.palette.mediumGrey,
    marginTop: '5%',
    marginBottom: '20%',
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
  },
  selectWrapper: {
    marginBottom: '50%',
  },
});

export default styles;
