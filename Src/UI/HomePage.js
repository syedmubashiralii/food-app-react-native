import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CustomCarousel from '../Components/components';
import styles from '../Styles/homestyles';

const tab = createBottomTabNavigator();
const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;
const categorylist = [
  {
    id: 1,
    name: 'All',
    image: require('../../assets/images/landing_chicken.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../../assets/images/burger.png'),
  },
  {
    id: 3,
    name: 'Pizza',
    image: require('../../assets/images/pizza.png'),
  },
  {
    id: 4,
    name: 'Desserts',
    image: require('../../assets/images/dessert.png'),
  },
];

const popularproduct = [
  {
    id: 1,
    name: 'Zinger Burger',
    price: 140,
    image: require('../../assets/images/burger.png'),
  },
  {
    id: 2,
    name: 'Cheese Pizza',
    price: 200,
    image: require('../../assets/images/pizza.png'),
  },
  {
    id: 3,
    name: 'Alfredo Pasta',
    price: 300,
    image: require('../../assets/images/noodles.png'),
  },
  {
    id: 4,
    name: 'Fudge Cake',
    price: 100,
    image: require('../../assets/images/dessert.png'),
  },
];
const promotionlist = [
  {id: 1, title: 'Item 1'},
  {id: 2, title: 'Item 2'},
  {id: 3, title: 'Item 2'},
];

const HomePage = ({navigation}) => {
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.mainview}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcons
            name="chevron-back-outline"
            size={30}
            color="#333"
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.text}>Menu</Text>
        <View style={styles.circle}>
          <Image
            source={require('../../assets/images/landing_chicken.png')}
            style={styles.profileimagestyle}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.flatliststyle}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categorylist}
          renderItem={({item, index}) => (
            <View style={{marginRight: 8}}>
              {index === 0 ? ( // Check if it's the first item
                <View style={styles.circleview}>
                  <Image
                    style={styles.image}
                    source={item.image}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <LinearGradient
                  colors={['#ece4f2', '#faf6fc']}
                  style={styles.gradientBackground}>
                  <View>
                    <Image
                      style={styles.image}
                      source={item.image}
                      resizeMode="contain"
                    />
                  </View>
                </LinearGradient>
              )}

              <Text style={styles.flatlisttextstyle}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <Text style={styles.promotiontext}>Promotions</Text>
      <View style={{height: Dev_Height * 0.17, width: Dev_Width - 20}}>
        <CustomCarousel
          data={promotionlist}
          itemWidth={Dev_Width}
          itemheigth={Dev_Height}
          autoplayInterval={4000}
        />
      </View>

      <Text style={styles.promotiontext}>Popular</Text>
      <View style={styles.popularmainviewstyle}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularproduct}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.popularinnerviewstyle,
                {marginRight: 12, justifyContent: 'center'},
              ]}>
              <View
                style={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignSelfcenter: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{alignSelf: 'center'}}
                  source={item.image}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <View>
                  <Text style={[styles.popularinnertextstyle]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.popularinnertextstyle,
                      {color: 'rgba(98, 108, 35, 1)'},
                    ]}>
                    {'Rs.' + item.price}
                  </Text>
                </View>
                <View style={styles.plusiconstyle}>
                  <Icon name="plus" size={14} color="white" />
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default HomePage;
