import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

const ProfilePage = ({navigation}) => {
  const [profileImage, setProfileImage] = useState(
    require('../../assets/images/profile_image.jpg'),
  );

  const user = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St, City',
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  const navigate = async () => {
    navigation.navigate('ImagePicker');
  };

  pickImage = () => {
    try {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchImageLibrary(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          const source = {uri: response.assets[0].uri};
          console.warn('response', JSON.stringify(response.assets[0].uri));
          setProfileImage(source);
        }
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={profileImage}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Icon name="camera" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.userName}>{user.name}</Text>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>Age: {user.age} years</Text>
          <Text style={styles.userInfoText}>Address: {user.address}</Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
          <Icon name="sign-out" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 15,
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#7E3EBE',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userInfoContainer: {
    marginVertical: 20,
  },
  userInfoText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7E3EBE',
    borderRadius: 12,
    padding: 15,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default ProfilePage;
