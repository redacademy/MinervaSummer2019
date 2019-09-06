import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  postWrapper: {
    paddingHorizontal: 10,
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

  responseWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
  },

  response: {
    paddingHorizontal: 10,
  },

  content: {
    paddingVertical: 35,
  },

  touchOp: {
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
