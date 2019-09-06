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
  signUp: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  signIn: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  errorMessage: {
    color: theme.palette.red,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameFormWrapper: {
    width: '47%',
  },
});

export default styles;
