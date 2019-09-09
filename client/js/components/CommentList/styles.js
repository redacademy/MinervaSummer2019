import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    width: '100%',
  },

  commentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  imageWrapper: {
    flexDirection: 'row',
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  comment: {
    width: '80%',
    backgroundColor: theme.palette.lightBlue,
    borderRadius: 10,
  },

  author: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },

  content: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },

  resWrapper: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
