import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  postWrapper: {
    padding: 10,
  },

  topWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  name: {
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
    fontSize: theme.font.subtitle,
  },

  lineB: {
    width: 2,
  },

  time: {
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },

  postBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  faveActive: {
    color: theme.palette.green,
  },

  faveInactive: {
    color: theme.palette.darkGrey,
  },

  triDotIcon: {
    color: theme.palette.darkGrey,
  },

  content: {
    paddingVertical: '5%',
    paddingHorizontal: 10,
    fontFamily: theme.fonts.regular,
    color: theme.palette.darkGrey,
    fontSize: theme.font.subtitle,
  },

  responseWrapper: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },

  response: {
    paddingHorizontal: '2%',
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },

  goToComment: {
    flexDirection: 'row',
  },

  touchOpWrapper: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
  },

  touchOp: {
    width: '50%',
    flexDirection: 'row',
  },

  touchOpResponse: {
    paddingHorizontal: '2%',
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.bold,
    fontSize: theme.font.subtitle,
  },

  like: {
    paddingHorizontal: '2%',
    color: theme.palette.green,
    fontFamily: theme.fonts.bold,
    fontSize: theme.font.subtitle,
  },

  liked: {
    paddingHorizontal: '2%',
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.bold,
    fontSize: theme.font.subtitle,
  },

  likeBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.palette.lightGrey,
  },

  commentBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
