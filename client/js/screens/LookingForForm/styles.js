import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    height: '100%',
    width: '100%',
    padding: '10%',
    paddingTop: '5%',
  },
  stepText: {
    textAlign: 'center',
    marginBottom: '5%',
  },
  inputLabels: {
    color: theme.palette.blue,
    marginTop: 30,
  },
  notSelected: {
    padding: 15,
    borderColor: theme.palette.darkGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  selected: {
    padding: 15,
    backgroundColor: theme.palette.blue,
    borderColor: theme.palette.blue,
    borderWidth: 1,
    color: 'white',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  skip: {
    textAlign: 'center',
  },
  signIn: {
    marginTop: 30,
    marginBottom: 30,
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
