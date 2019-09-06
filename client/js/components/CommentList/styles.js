import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 200,
  },

  commentWrapper: {
    flexDirection: 'row',
  },

  imageWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: 10,
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  comment: {
    width: 250,
    backgroundColor: theme.palette.lightBlue,
    backgroundColor: 'grey',
    borderRadius: 10,
  },

  author: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  content: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  botWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
