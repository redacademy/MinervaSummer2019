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
  modalRoot: {
    height: '100%',
    alignItems: 'center',
    paddingVertical: '20%',
    paddingHorizontal: '10%',
  },
  backHeader: {
    width: '100%',
    alignItems: 'flex-start',
  },
});

export default styles;
