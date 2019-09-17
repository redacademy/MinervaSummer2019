import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    height: '100%',
    width: '100%',
    overflow: 'visible',
    marginBottom: '15%',
  },
  stepText: {
    textAlign: 'center',
    margin: '2%',
    color: theme.palette.mediumGrey,
  },
  chip: {
    borderColor: theme.palette.darkGrey,
    borderWidth: 1,
  },
  chipText: {
    color: theme.palette.darkGrey,
    fontSize: 16,
  },
  chipSelected: {
    borderColor: 'white',
    backgroundColor: theme.palette.blue,
  },
  chipTextSelected: {
    color: 'white',
    fontSize: 16,
  },
  chipsWrapper: {
    paddingBottom: '10%',
    paddingHorizontal: '10%',
    borderTopColor: theme.palette.lightGrey,
    borderTopWidth: 1,
  },
  chipsHeading: {
    textAlign: 'center',
    margin: '5%',
  },
  heading: {
    color: theme.palette.blue,
    marginHorizontal: '10%',
    marginBottom: '1%',
    marginTop: '5%',
    fontSize: 24,
    fontFamily: theme.fonts.heavy,
  },
  subHeading: {
    margin: '10%',
    marginTop: '0%',
    color: theme.palette.mediumGrey,
    fontFamily: theme.fonts.regular,
  },
  divider: {
    borderTopColor: theme.palette.lightGrey,
    borderTopWidth: 1,
  },
  buttonWrapper: {
    alignItems: 'center',
  },
});

export default styles;
