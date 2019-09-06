import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '5%',
  },
  profileImage: {
    flex: 1,
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
  },
  name: {
    fontSize: theme.font.subHeader,
    letterSpacing: 0.3,
    lineHeight: 25,
    paddingVertical: '5%',
  },
  status: {
    fontSize: theme.font.subtitle,
    color: theme.palette.blue,
    fontWeight: 'bold',
    paddingVertical: '5%',
  },
  locationStatus: {
    fontSize: theme.font.paragraph,
    color: theme.palette.darkGrey,
  },
  interest: {
    flex: 1,
    paddingVertical: '5%',
  },
  section: {
    flex: 1,
    paddingVertical: '5%',
  },
  sectionTitle: {
    flex: 1,
    textAlign: 'center',
    color: theme.palette.darkGrey,
    fontSize: theme.font.subtitle,
  },
  sectionContent: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: '2%',
    textAlign: 'center',
  },
  icon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  globe: {
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingVertical: '2%',
    minHeight: '50%',
    fontSize: theme.font.subtitle,
    backgroundColor: theme.palette.blue,
    color: 'white',
    fontWeight: '900',
    paddingHorizontal: '6%',
    borderRadius: 15,
  },
});

export default styles;
