import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: '10%',
    justifyContent: 'space-evenly',
    paddingHorizontal: '10%',
  },
  heading: {
    fontFamily: theme.fonts.heavy,
    fontSize: 20,
    color: theme.palette.darkGrey,
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.palette.darkGrey,
    marginTop: '10%',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '80%',
  },
  image: {
    height: '50%',
    width: '50%',
  },
  textWrapper: {
    width: '70%',
    height: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%',
  },
});

export default styles;
