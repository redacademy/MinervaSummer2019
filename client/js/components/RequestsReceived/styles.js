import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  userCard: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 100,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },

  nameWrapper: {
    justifyContent: 'space-between',
  },

  lineB: {
    width: 8,
  },

  name: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },

  status: {
    color: theme.palette.red,
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },

  messageWrapper: {
    width: '100%',
  },

  message: {
    width: '100%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },

  BtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
  },

  btnYes: {
    height: 50,
    width: '30%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.palette.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnNo: {
    height: 50,
    width: '30%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.palette.red,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnYesText: {
    color: theme.palette.darkBlue,
    fontFamily: theme.fonts.medium,
    fontSize: theme.font.subtitle,
  },

  btnNoText: {
    color: theme.palette.red,
    fontFamily: theme.fonts.medium,
    fontSize: theme.font.subtitle,
  },
});

export default styles;
