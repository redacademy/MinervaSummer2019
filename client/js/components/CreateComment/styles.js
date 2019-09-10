import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  inputWrapper: {
    marginLeft: '2%',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '80%',
  },

  postBtn: {
    color: theme.palette.green,
  },
});

export default styles;
