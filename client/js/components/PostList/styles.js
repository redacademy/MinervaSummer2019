import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 200,
    // justifyContent: 'center',
    // borderWidth: 1,
  },
  authorWrapper: {
    flexDirection: 'row',
  },
  head: {
    height: 60,
    width: 60,
  },

  responseWrapper: {
    flexDirection: 'row',
  },

  content: {
    paddingVertical: 20,
  },
  // likesWrapper: {
  //   flexDirection: 'row',
  // },

  // commentsWrapper: {
  //   flexDirection: 'row',
  // },

  touch: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: '100%',
    height: 40,
  },

  likeBtn: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
  },

  commentBtn: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
