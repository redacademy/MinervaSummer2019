import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    backgroundColor: theme.palette.blue,
    overflow: 'hidden',
  },
  toggleTextActive: {
    textAlign: 'center',
    fontSize: 14,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.regular,
    color: theme.palette.blue,
  },
  toggleTextInactive: {
    textAlign: 'center',
    fontSize: 14,
    padding: '4%',
    paddingVertical: '7%',
    fontFamily: theme.fonts.bold,
    color: 'white',
  },
  toggleActive: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    height: '100%',
    alignItems: 'center',
  },
  toggleInactive: {
    flex: 1,
    width: '50%',
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor: theme.palette.blue,
  },
  headingsWrapper: {
    justifyContent: 'center',
  },
  noConnectionsWrapper: {
    alignItems: 'center',
    paddingHorizontal: '10%',
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
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
  noConnectionsButtonWrapper: {},
});

export default styles;
