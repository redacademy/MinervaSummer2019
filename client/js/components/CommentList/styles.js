import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  commentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '2%',
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
    paddingVertical: '5%',
  },

  resWrapper: {
    paddingHorizontal: '5%',
    paddingBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
