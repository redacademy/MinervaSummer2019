import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
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
    padding: '5%',
    borderTopColor: theme.palette.lightGrey,
    borderTopWidth: 1,
  },
  chipsHeading: {
    textAlign: 'center',
    margin: '5%',
  },
});

export default styles;
