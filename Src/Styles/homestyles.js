import {Dimensions, StyleSheet} from 'react-native';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;
export default styles = StyleSheet.create({
  popularinnertextstyle: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 16,
    fontWeight: 500,
    paddingHorizontal: 15,
  },
  plusiconstyle: {
    borderRadius: 20,
    height: 22,
    marginRight: 10,
    width: 22,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(98, 108, 35, 1)',
  },
  popularmainviewstyle: {
    width: Dev_Width - 20,
    borderRadius: 20,
    flex: 1,
    marginBottom: 10,
  },
  popularinnerviewstyle: {
    flex: 1,
    width: Dev_Width * 0.4,
    backgroundColor: 'rgba(126, 62, 190, 0.22)',
    borderRadius: 20,
    alignContent: 'center',
    paddingVertical: 5,
  },
  promotionmainviewstyle: {
    paddingTop: 10,
    height: Dev_Height * 0.17,
    width: Dev_Width - 20,

    alignSelf: 'center',
    borderRadius: 20,
  },
  promotioninnertextstyle: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    padding: 12,
    paddingHorizontal: 15,
  },
  mainview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'topcenter',
    backgroundColor: 'white',
  },
  flatliststyle: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
  },

  circleview: {
    height: 85,
    width: 85,
    backgroundColor: '#7E3EBE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    height: 85,
    width: 85,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
  },
  promotiontext: {
    fontFamily: 'Poppins-Regular',
    padding: 10,
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: '500',
  },
  flatlisttextstyle: {
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    fontWeight: '500',
    color: '#989595',
    overflow: 'scroll',
    maxWidth: 85,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Gray background color
    borderRadius: 25, // Border radius to make it circular
    paddingLeft: 10, // Add padding for the icon
    margin: 10,
    padding: 6,
  },
  searchIcon: {
    paddingRight: 10, // Add some spacing between the icon and input
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: '#000', // Text color
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimagestyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
