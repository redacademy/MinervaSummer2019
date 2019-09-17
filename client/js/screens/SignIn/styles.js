import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: '20%',
    height: '100%',
    width: '100%',
    padding: 30,
  },
  inputLabels: {
    color: theme.palette.blue,
    marginTop: 30,
    fontFamily: theme.fonts.heavy,
  },
  textInputs: {
    padding: 15,
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
  },
  signUp: {
    fontFamily: theme.fonts.heavy,
    textAlign: 'center',
    color: theme.palette.darkGrey,
    marginTop: '8%',
  },
  signIn: {
    marginTop: 30,
    marginBottom: 30,
  },
  errorMessage: {
    color: theme.palette.red,
    fontFamily: theme.fonts.regular,
  },
  buttonWrapper: {
    width: '80%',
  },
  forgotButton: {
    marginTop: '5%',
    width: '100%',
    alignItems: 'center',
  },
  forgotText: {
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: theme.palette.darkGrey,
  },
  errorRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: '20%',
  },
  errorScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  errorImage: {
    flex: 1,
    width: 150,
    maxHeight: 150,
    alignSelf: 'center',
  },
  errorTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.font.subtitle,
    width: '50%',
    marginVertical: '10%',
    textAlign: 'center',
  },
});

export default styles;
