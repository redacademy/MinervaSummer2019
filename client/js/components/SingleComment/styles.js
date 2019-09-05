import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  comment: {
    width: 300,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },

  author: {
    paddingLeft: 10,
    paddingVertical: 20,
  },

  content: {
    paddingLeft: 10,
    paddingVertical: 10,
  },

  botWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likes: {
    flexDirection: 'row',
  },
});

export default styles;
