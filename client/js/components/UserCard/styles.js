import {StyleSheet} from 'react-native';
import theme from '../../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: '7%',
    alignItems: 'center',
    borderColor: theme.palette.lightGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: '5%',
  },
  userPicture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  userDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: '5%',
  },
  aboutMeWrapper: {
    width: '100%',
  },
  userDetails: {
    paddingLeft: '3%',
    color: theme.palette.darkGrey,
  },
  userBio: {
    marginVertical: '3%',
    fontSize: 14,
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.regular,
  },
  aboutMeHeading: {
    paddingTop: '10%',
    fontSize: 16,
    color: theme.palette.darkGrey,
    fontFamily: theme.fonts.heavy,
  },
  locationSchool: {
    fontSize: 14,
    color: theme.palette.darkGrey,
    alignItems: 'baseline',
    fontFamily: theme.fonts.regular,
  },
  locationSchoolImage: {
    height: 14,
    width: 14,
    marginRight: '5%',
  },
  userName: {
    fontSize: 18,
    color: theme.palette.darkGrey,
    marginBottom: '5%',
    fontFamily: theme.fonts.heavy,
    textTransform: 'capitalize',
  },
  buttonWrapper: {
    width: '90%',
    paddingTop: '15%',
  },
});

export default styles;
