import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  postWrapper: {
    paddingTop: '10%',
    paddingBottom: '10%',
    paddingHorizontal: '3%',
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
    justifyContent: 'space-around',
  },

  touchOp: {
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
  },

  postInput: {
    marginLeft: '5%',
    flexDirection: 'row',
    alignContent: 'center',
  },

  textBubble: {
    justifyContent: 'center',
  },

  header: {
    fontSize: 24,
    textAlign: 'center',
    // marginVertical: '5%',
    height: 40,
  },

  topicsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  topic: {
    height: 35,
    width: 80,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topicInactive: {
    borderColor: theme.palette.darkGrey,
  },

  topicActive: {
    borderColor: theme.palette.blue,
    backgroundColor: theme.palette.blue,
  },

  topicText: {
    fontSize: 16,
    textAlign: 'center',
  },

  topicTextInactive: {
    color: theme.palette.darkGrey,
  },

  topicTextActive: {
    color: '#FFF',
  },

  favouriteHeaderIcon: {
    height: '60%',
  },
});

export default styles;
