import {StyleSheet} from 'react-native';
import theme from '../../config/theme';
import {ThemeColors} from 'react-navigation';

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
    color: theme.palette.mediumGrey,
  },
  inputLabels: {
    color: theme.palette.blue,
    marginTop: '5%',
  },
  textInputs: {
    padding: '5%',
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '5%',
  },
  skip: {
    textAlign: 'center',
    color: theme.palette.blue,
  },
  signIn: {
    marginTop: '10%',
    marginBottom: '10%',
  },
  errorMessage: {
    color: theme.palette.red,
  },
  infoText: {
    color: theme.palette.mediumGrey,
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default styles;
