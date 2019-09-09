import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  postWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  authorWrapper: {
    flexDirection: 'row',
    width: '80%',
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  nameWrapper: {
    paddingLeft: '5%',
    justifyContent: 'space-around',
  },

  time: {
    color: theme.palette.darkGrey,
  },

  content: {
    paddingVertical: '5%',
  },

  responseWrapper: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },

  response: {
    paddingHorizontal: '2%',
    color: theme.palette.darkGrey,
  },

  goToComment: {
    flexDirection: 'row',
  },

  opWrapper: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
    flexDirection: 'row',
    height: 40,
  },

  touchOp: {
    flexDirection: 'row',
    width: '50%',
  },

  likeBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.palette.lightGrey,
  },

  commentBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
