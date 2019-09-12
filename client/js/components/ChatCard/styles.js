import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    paddingVertical: 10,
  },
  picturesWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // position: 'absolute',
    // transform: [{translateY: 25}, {translateX: 25}],
  },
  picture1: {
    // right: 25,
    // top: 25,
  },
  picture2: {
    // left: 25,
    // bottom: 25,
  },
  chatTextWrapper: {
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: '5%',
  },
  chatTitle: {
    fontFamily: theme.fonts.bold,
    color: theme.palette.darkGrey,
    fontSize: 16,
    lineHeight: 20,
  },
  chatPreview: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.mediumGrey,
  },
  chatTextBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
    paddingTop: '5%',
  },
  messageDate: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.palette.mediumGrey,
    textAlign: 'right',
  },
});

export default styles;
