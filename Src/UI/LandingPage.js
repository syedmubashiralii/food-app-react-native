import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

const LandingPage = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#6507C3', '#BCACC8']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}>
      <View style={styles.mainview}>
        <View style={styles.circleview}>
          <Image
            style={styles.image}
            source={require('../../assets/images/landing_chicken.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.slogantext}>Enjoy{'\n'}Your Food</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomNavigator')}>
          <Text style={styles.buttontext}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
  },
  circleview: {
    height: Dev_Height * 0.36,
    width: Dev_Height * 0.36,
    backgroundColor: 'white',
    borderRadius: Dev_Height * 0.2,
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    height: Dev_Height * 0.34,
    width: Dev_Height * 0.34,
  },
  slogantext: {
    marginTop: 30,
    // fontFamily: "Poppins-SemiBold",
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    lineHeight: 60,
    alignSelf: 'center', // Align the text to the center
  },
  button: {
    marginTop: 60,
    backgroundColor: 'white',
    height: 50,
    width: Dev_Width * 0.5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontStyle: 'italic',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default LandingPage;
