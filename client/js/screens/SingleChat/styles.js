import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  scrollRoot: {
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    alignItems: 'center',
  },
  chatCard: {
    width: '100%',
    marginVertical: 10,
  },
  sentMessage: {
    flexDirection: 'row-reverse',
  },
  receivedMessage: {
    flexDirection: 'row',
  },
  chatBubbleReceived: {
    backgroundColor: theme.palette.lightGrey,
    borderRadius: 5,
    justifyContent: 'center',
    maxWidth: '80%',
  },
  chatBubbleSent: {
    backgroundColor: theme.palette.lightBlue,
    borderRadius: 5,
    justifyContent: 'center',
    maxWidth: '80%',
  },
  chatBubbleText: {
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.regular,
    padding: 5,
  },
  authorPicture: {
    height: 50,
    width: 50,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 45,
    width: '90%',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    overflow: 'hidden',
    marginBottom: 10,
  },
  buttonWrapper: {
    height: '100%',
  },
  input: {flex: 1, padding: '5%'},
});

export default styles;
