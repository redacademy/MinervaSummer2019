import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    height: '100%',
    width: '100%',
    padding: '10%',
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
  imageButtonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  bioInput: {
    minHeight: 200,
    padding: 15,
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  profilePicture: {
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: theme.palette.blue,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10%',
    marginBottom: '10%',
  },
  toMeetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  toMeetActive: {
    color: theme.palette.darkGrey,
  },
  toMeetInactive: {
    color: theme.palette.lightGrey,
  },
});

export default styles;
