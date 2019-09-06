import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  stepText: {
    textAlign: 'center',
    color: theme.palette.mediumGrey,
    marginTop: '5%',
  },
  heading: {
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
  },
  subHeading: {
    color: theme.palette.mediumGrey,
    marginBottom: '5%',
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
    color: theme.palette.blue,
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
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '80%',

    justifyContent: 'space-around',
  },
  bioInput: {
    minHeight: 150,
    padding: 15,
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '10%',
  },
  profilePicture: {
    borderRadius: 100,
    width: 200,
    height: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10%',
    marginBottom: '10%',
  },
  toMeetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    alignItems: 'center',
  },
  toMeetActive: {
    color: theme.palette.darkGrey,
  },
  toMeetInactive: {
    color: theme.palette.lightGrey,
  },
});

export default styles;
