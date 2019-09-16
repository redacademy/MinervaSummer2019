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
});
export default styles;
