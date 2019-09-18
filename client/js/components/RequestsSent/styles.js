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

  messageWrapper: {
    justifyContent: 'space-between',
  },

  lineB: {
    width: 8,
  },

  name: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },

  message: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },

  status: {
    color: theme.palette.red,
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
  },
});

export default styles;
