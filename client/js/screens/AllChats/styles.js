import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  noChatRoot: {
    paddingVertical: '10%',
    alignItems: 'center',
    height: '80%',
    paddingHorizontal: '20%',
  },
  root: {
    flex: 1,
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
    width: '100%',
    paddingTop: '10%',
  },
  backHeader: {
    width: '100%',
    alignItems: 'flex-start',
  },
  backButton: {
    color: theme.palette.blue,
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userCard: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    marginVertical: 10,
  },
  userName: {
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.heavy,
    fontSize: 16,
    marginLeft: '3%',
  },
  startChatbutton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height: '30%',
    backgroundColor: theme.palette.blue,
    alignItems: 'center',
    marginRight: '5%',
    justifyContent: 'center',
  },
  startChatText: {
    color: 'white',
    fontFamily: theme.fonts.bold,
    fontSize: 12,
  },
  chatCardText: {
    borderBottomColor: theme.palette.lightGrey,
    borderBottomWidth: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
  },
  scrollRoot: {
    width: '100%',
  },
  searchLabel: {
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
    fontSize: 18,
    paddingVertical: 10,
  },
  searchWrapper: {
    width: '100%',
  },
  heading: {
    fontFamily: theme.fonts.heavy,
    color: theme.palette.darkGrey,
    textAlign: 'center',
    marginVertical: '5%',
    fontSize: 18,
  },
  subHeading: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.darkGrey,
    textAlign: 'center',
    marginVertical: '5%',
    fontSize: 16,
  },
  chatImage: {
    width: '60%',
    height: '50%',
  },
  togglesWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '15%',
    height: '7%',
  },
  toggleActive: {
    backgroundColor: theme.palette.blue,
    width: '35%',
    borderColor: theme.palette.blue,
    borderWidth: 2,
  },
  toggleInactive: {
    backgroundColor: 'white',
    width: '35%',
    borderColor: theme.palette.blue,
    borderWidth: 2,
  },
  toggleBase: {
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  individual: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  all: {
    borderColor: theme.palette.blue,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  group: {
    borderColor: theme.palette.blue,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
  textBase: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    textAlign: 'center',
  },
  textActive: {
    color: 'white',
  },
  textInactive: {
    color: theme.palette.blue,
  },
  textInput: {
    borderRadius: 50,
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default styles;
