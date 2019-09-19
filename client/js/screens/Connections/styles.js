import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
  topicButtonsWrapper: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  topicTextActive: {
    textAlign: 'center',
    fontSize: 13,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.heavy,
    color: 'white',
  },
  topicTextInactive: {
    textAlign: 'center',
    fontSize: 13,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.bold,
    color: theme.palette.blue,
  },
  topic: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: theme.palette.blue,
  },
  topicActive: {
    backgroundColor: theme.palette.blue,
  },
  topicInactive: {
    borderColor: theme.palette.blue,
    backgroundColor: 'white',
  },
  headingsWrapper: {
    justifyContent: 'center',
  },
  noConnectionsWrapper: {
    alignItems: 'center',
    paddingHorizontal: '10%',
    height: '100%',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  noConnectionsImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
    marginBottom: '10%',
  },
  noConnectionsHeading: {
    fontFamily: theme.fonts.heavy,
    color: theme.palette.darkGrey,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: '5%',
  },
  noConnectionsSubHeading: {
    fontFamily: theme.fonts.regular,
    color: theme.palette.darkGrey,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: '10%',
  },
  connected: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  suggested: {
    borderColor: theme.palette.blue,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  pending: {
    borderColor: theme.palette.blue,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
});

export default styles;
