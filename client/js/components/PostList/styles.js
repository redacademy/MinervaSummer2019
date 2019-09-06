import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  postWrapper: {
    paddingHorizontal: 20,
  },

  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  authorWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  nameWrapper: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },

  time: {
    color: theme.palette.darkGrey,
  },

  postBtn: {
    paddingTop: 20,
  },

  menuList: {
    paddingLeft: 50,
  },

  responseWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
    flexDirection: 'row',
  },

  response: {
    paddingHorizontal: 10,
    color: theme.palette.darkGrey,
  },

  goToComment: {
    flexDirection: 'row',
    flexDirection: 'row',
  },

  content: {
    paddingVertical: 35,
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
