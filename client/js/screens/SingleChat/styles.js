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
    marginVertical: 5,
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
    padding: 10,
  },
  authorPicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 50,
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
  membersText: {
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 2,
  },
  membersNameWrapper: {
    minHeight: '7%',
    paddingHorizontal: '10%',
    paddingVertical: 10,
    borderBottomColor: theme.palette.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: '3%',
    justifyContent: 'center',
  },
  fixedRoot: {
    flex: 1,
  },
  noMessagePicture: {
    width: 120,
    height: 120,
    position: 'absolute',
  },
  noMessagePictureWrapper: {
    width: '80%',
    height: '25%',
    position: 'relative',
  },
  picture1: {
    left: 0,
    borderColor: 'white',
    borderTopLeftRadius: 76,
    borderBottomLeftRadius: 76,
    borderTopRightRadius: 76,
    borderBottomRightRadius: 76,
    borderWidth: 3,
    zIndex: 1000,
    height: 122,
    width: 122,
    borderRadius: 76,
  },
  picture2: {
    right: 0,
    zIndex: 50,
    borderRadius: 75,
  },
  noMessagesRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '15%',
  },
  heading: {
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
    fontFamily: theme.fonts.heavy,
    color: theme.palette.darkGrey,
  },
  subHeading: {
    color: theme.palette.darkGrey,
    marginBottom: '10%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
  },
  authorPictureWrapper: {
    width: '17%',
    alignItems: 'center',
    minHeight: 50,
  },
  chatSeperator: {
    width: '100%',
    height: 20,
  },
});

export default styles;
