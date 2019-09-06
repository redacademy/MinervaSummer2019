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
    marginTop: 30,
  },
  textInputs: {
    padding: 15,
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  signUp: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  signIn: {
    marginTop: 30,
    marginBottom: 30,
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
