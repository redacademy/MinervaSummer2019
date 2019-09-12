import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: '10%',
    paddingVertical: '10%',
  },
  chatCard: {
    width: '100%',
    paddingVertical: '5%',
  },
  sentMessage: {
    flexDirection: 'row-reverse',
  },
  receivedMessage: {
    flexDirection: 'row',
  },
  chatBubble: {
    backgroundColor: theme.palette.lightBlue,
    borderRadius: 5,
    justifyContent: 'center',
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
    marginHorizontal: '5%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 45,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  buttonWrapper: {
    height: '100%',
  },

  input: {},
});

export default styles;
