import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    height: '100%',
    width: '100%',
    padding: '5%',
    overflow: 'visible',
  },
  stepText: {
    textAlign: 'center',
    marginBottom: '5%',
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
    borderTopColor: theme.palette.lightGrey,
    borderTopWidth: 1,
  },
  chipsHeading: {
    textAlign: 'center',
    margin: '5%',
  },
  heading: {
    color: theme.palette.blue,
    margin: '5%',
    fontSize: 24,
  },
  subHeading: {
    margin: '5%',
    color: theme.palette.mediumGrey,
  },
  divider: {
    borderTopColor: theme.palette.lightGrey,
    borderTopWidth: 1,
  },
});

export default styles;
