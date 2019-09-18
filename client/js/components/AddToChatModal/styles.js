import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 10,
  },
  picturesWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
  },
  picture1: {
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
  picture2: {
    right: 0,
    top: 0,
  },
  chatTextWrapper: {
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: '5%',
  },
  chatTitle: {
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
    fontSize: 16,
    marginBottom: 20,
    maxWidth: '60%',
  },
  chatPreview: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.mediumGrey,
    width: '75%',
    marginBottom: 10,
  },
  chatTextBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },
  messageDate: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.palette.mediumGrey,
    textAlign: 'right',
    alignSelf: 'center',
  },
  optionIcon: {
    height: 25,
    width: 25,
  },
  chatCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  deleteModalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(80, 80, 80, 0.6)',
  },
  deleteWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '30%',
    justifyContent: 'flex-end',
  },
  deleteHeading: {
    fontFamily: theme.fonts.heavy,
    color: theme.palette.darkGrey,
    fontSize: 18,
    textAlign: 'center',
  },
  deleteSubHeading: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.darkGrey,
    fontSize: 16,
    textAlign: 'center',
  },
  deleteConfirm: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.red,
    fontSize: 18,
    textAlign: 'center',
  },
  deleteCancel: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.blue,
    fontSize: 18,
    textAlign: 'center',
  },
  deleteButtons: {
    borderTopColor: theme.palette.lightGrey,
    borderTopWidth: 1,
    height: '30%',
    justifyContent: 'center',
  },
  deleteTextWrapper: {
    height: '40%',
    justifyContent: 'center',
  },
  optionsWrapper: {
    flexDirection: 'row',
    width: '30%',
    paddingRight: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  removeUserName: {
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.heavy,
    fontSize: 14,
  },
  startChatbutton: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    height: '40%',
    backgroundColor: theme.palette.blue,
    alignItems: 'center',
    marginRight: '5%',
    justifyContent: 'center',
  },
  startChatText: {
    color: 'white',
    fontFamily: theme.fonts.heavy,
    fontSize: 14,
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
  modalRoot: {
    height: '100%',
    alignItems: 'center',
    width: '100%',
    paddingTop: '10%',
    paddingHorizontal: '5%',
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
  textInput: {
    borderRadius: 50,
    borderColor: theme.palette.lightGrey,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  removeChatMembersWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 10,
    flexWrap: 'wrap',
  },
  continueButtonWrapper: {
    width: '60%',
    alignItems: 'center',
  },
  addedText: {
    textAlign: 'left',
    color: theme.palette.green,
    fontFamily: theme.font.heavy,
    fontSize: 18,
  },
  removeUserWrapper: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    width: '20%',
  },
  removeImageWrapper: {
    position: 'relative',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButton: {
    position: 'absolute',
    right: 3,
    top: 3,
    zIndex: 100,
  },
});

export default styles;
