import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingTop: 20,
  },
  createChatBtn: {
    height: 50,
    width: '80%',
    backgroundColor: theme.palette.blue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnWrapper: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: 'white',
    marginBottom: 2,
    marginLeft: 10,
  },
});

export default styles;
