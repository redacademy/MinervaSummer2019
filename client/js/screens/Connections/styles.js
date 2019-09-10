import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  toggleButtonsWrapper: {
    marginHorizontal: '10%',
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: theme.palette.blue,
    flexDirection: 'row',
    borderWidth: 1,
  },
  toggleTextActive: {
    textAlign: 'center',
    fontSize: 14,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.regular,
    color: 'white',
  },
  toggleTextInactive: {
    textAlign: 'center',
    fontSize: 14,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.regular,
    color: theme.palette.blue,
  },
  toggleActive: {
    flex: 1,
    backgroundColor: theme.palette.blue,
    borderRadius: 5,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    height: '100%',
    alignItems: 'center',
  },
  toggleInactive: {
    flex: 1,
    width: '50%',
    borderRadius: 5,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    height: '100%',
    alignItems: 'center',
  },
  headingsWrapper: {
    justifyContent: 'center',
  },
  noConnectionsWrapper: {
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  noConnectionsImage: {
    width: '50%',
    height: '50%',
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
});

export default styles;
