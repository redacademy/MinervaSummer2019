import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginVertical: 10,
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
  deleteIcon: {
    height: 15,
    width: 15,
  },
  chatCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  modalRoot: {
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
});

export default styles;
