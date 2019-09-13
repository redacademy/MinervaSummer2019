import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  TextInput: {
    borderStyle: 'dashed',
  },

  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    padding: '5%',
  },
  metaProfile: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center',
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
    marginVertical: '5%',
    minWidth: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  status: {
    fontSize: theme.font.subtitle,
    color: theme.palette.blue,
    fontWeight: 'bold',
    paddingVertical: '5%',
  },
  editableStatus: {
    fontSize: theme.font.subtitle,
    color: theme.palette.blue,
    fontWeight: 'bold',
    marginVertical: '1%',
    height: 20,
    width: 100,
  },
  locationStatus: {
    fontSize: theme.font.paragraph,
    color: theme.palette.darkGrey,
    marginVertical: '1%',
    minWidth: '20%',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  locationMetrix: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '1%',
  },

  interest: {
    flex: 1,
    marginVertical: '3%',
    height: 'auto',
  },
  section: {
    flex: 1,
    marginVertical: '5%',
    height: 'auto',
    minWidth: '100%',
  },
  sectionTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.darkGrey,
    fontSize: theme.font.subtitle,
    marginBottom: '2%',
  },
  sectionContent: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '3%',
    textAlign: 'justify',
    // height: 'auto',
  },
  icon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    height: 20,
    width: 20,
    marginRight: '2%',
  },
  globe: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginVertical: '3%',
    marginHorizontal: '1%',
    fontSize: theme.font.subtitle,
    backgroundColor: theme.palette.blue,
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: '6%',
    paddingVertical: 10,
    borderRadius: 15,
  },
  removeIcon: {
    color: theme.palette.red,
    fontSize: 25,
  },
  saveButton: {
    flex: 1,
    marginVertical: '1%',
    height: 'auto',
  },
  logout: {
    color: theme.palette.red,
    fontFamily: theme.fonts.regular,
    marginRight: 10,
  },
});

export default styles;
