import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-evenly',
    alignContent: 'center',
    height: '100%',
    width: '100%',
    padding: 30,
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
});

export default styles;
