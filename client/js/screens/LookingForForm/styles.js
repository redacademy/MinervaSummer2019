import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

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
    marginTop: '5%',
    marginBottom: '5%',
  },
  selected: {
    padding: '5%',
    backgroundColor: theme.palette.blue,
    borderColor: theme.palette.blue,
    borderWidth: 1,
    color: 'white',
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '5%',
  },
  textNotSelected: {
    color: theme.palette.mediumGrey,
    textAlign: 'center',
  },
  textSelected: {
    color: 'white',
    textAlign: 'center',
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
  },
  subHeading: {
    color: theme.palette.mediumGrey,
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default styles;
