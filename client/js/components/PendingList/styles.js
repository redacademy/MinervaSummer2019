import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderColor: theme.palette.lightGrey,
  },

  topicButtonsWrapper: {
    marginVertical: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
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

  topicTextActive: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.font.subtitle,
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
});

export default styles;
