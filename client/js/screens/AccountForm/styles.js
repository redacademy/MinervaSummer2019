import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    justifyContent: 'space-between',
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
    fontFamily: theme.fonts.heavy,
  },
  textInputs: {
    padding: '5%',
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '5%',
    fontFamily: theme.fonts.regular,
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
    fontFamily: theme.fonts.regular,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameFormWrapper: {
    width: '47%',
  },
  buttonWrapper: {
    marginBottom: '5%',
  },
});

export default styles;
