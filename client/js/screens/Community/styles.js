import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  postWrapper: {
    marginVertical: 10,
    paddingHorizontal: '3%',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
  },

  touchOp: {
    height: 40,
    marginVertical: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: theme.palette.lightGrey,
  },

  postInput: {
    marginLeft: '5%',
    flexDirection: 'row',
    alignContent: 'center',
  },

  textBubble: {
    color: theme.palette.mediumGrey,
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  textWrapper: {
    justifyContent: 'center',
    fontSize: theme.font.paragraph,
    fontFamily: theme.fonts.regular,
    color: theme.palette.lightGrey,
  },

  text: {
    color: theme.palette.mediumGrey,
    fontFamily: theme.fonts.regular,
  },

  header: {
    marginVertical: 10,
    marginLeft: 5,
    fontSize: theme.font.header,
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
    fontSize: 18,
  },

  topicsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: '5%',
    flexWrap: 'wrap',
  },

  topic: {
    height: 35,
    width: '22%',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.palette.lightGrey,
  },

  topicInactive: {
    borderColor: theme.palette.mediumGrey,
  },

  topicActive: {
    borderColor: theme.palette.blue,
    backgroundColor: theme.palette.blue,
  },

  topicText: {
    textAlign: 'center',
    fontSize: theme.font.subtitle,
    fontFamily: theme.fonts.heavy,
  },

  topicTextInactive: {
    color: theme.palette.darkGrey,
  },

  topicTextActive: {
    color: '#FFF',
  },

  favouriteHeaderButton: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '30%',
  },
  favouriteHeaderIcon: {
    width: 30,
    height: 30,
  },
});

export default styles;
