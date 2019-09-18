import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
  topicButtonsWrapper: {
    marginVertical: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  topicTextActive: {
    textAlign: 'center',
    fontSize: 13,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.regular,
    color: theme.palette.blue,
  },
  topicTextInactive: {
    textAlign: 'center',
    fontSize: 13,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.bold,
    color: 'white',
  },
  topic: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '30%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.palette.blue,
  },
  topicActive: {
    backgroundColor: 'white',
  },
  topicInactive: {
    borderColor: theme.palette.blue,
    backgroundColor: theme.palette.blue,
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
  noConnectionsButtonWrapper: {},
});

export default styles;
