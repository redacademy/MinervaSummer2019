import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  scrollRoot: {
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  root: {
    alignItems: 'center',
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
    marginBottom: '10%',
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
    marginBottom: '15%',
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
    height: 150,
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
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10%',
    marginBottom: '10%',
  },
  toMeetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5%',
  },
  toMeetActive: {
    color: theme.palette.darkGrey,
  },
  toMeetInactive: {
    color: theme.palette.lightGrey,
  },
  toMeetImage: {
    marginTop: '15%',
    height: 100,
    width: 60,
  },
  toMeetButton: {
    alignItems: 'center',
  },
  button: {
    width: '50%',
  },
});

export default styles;
