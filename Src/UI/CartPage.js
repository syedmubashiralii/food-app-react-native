import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

const CartPage = ({navigation}) => {
  const [cartlist, setcartlist] = useState([
    {
      id: 0,
      name: 'Noodles',
      price: 120,
      count: 1,
      image: require('../../assets/images/noodles.png'),
    },
    {
      id: 1,
      name: 'Zinger Burger',
      price: 140,
      count: 1,
      image: require('../../assets/images/burger.png'),
    },
    {
      id: 2,
      name: 'Alfredo pasta',
      price: 170,
      count: 1,
      image: require('../../assets/images/landing_chicken.png'),
    },
  ]);
  const [text, setText] = useState('');
  const [totalamount, settotalamount] = useState(0);
  const updateItemValue = (itemId, newValue) => {
    setcartlist(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? {...item, count: newValue} : item,
      ),
    );
    calculateprice();
  };
  const calculateprice = () => {
    const calculatedTotalPrice = cartlist.reduce(
      (total, item) => total + item.price * item.count,
      0,
    );
    settotalamount(calculatedTotalPrice);
  };
  useEffect(() => {
    calculateprice();
  }, [cartlist]);
  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.contentContainer}>
        <Text style={styles.itemstextstyle}>2 Items in Cart</Text>
        <View style={{flex: 2}}>
          <FlatList
            data={cartlist}
            renderItem={({item, index}) => (
              <View style={styles.listitemstyle}>
                <LinearGradient
                  colors={[
                    'rgba(223, 199, 223, 0.43)',
                    'rgba(126, 62, 190, 0)',
                  ]}
                  style={styles.listimagegradient}>
                  <Image
                    style={styles.imagestyle}
                    source={item.image}
                    resizeMode="contain"
                  />
                </LinearGradient>
                <View style={styles.itemdetailviewstyle}>
                  <Text style={styles.itemstextstyle}>{item.name}</Text>
                  <Text
                    style={[
                      styles.itemstextstyle,
                      {color: 'rgba(201, 204, 69, 1)'},
                    ]}>
                    Rs.{item.price}
                  </Text>
                  <View style={styles.addminusitemstyle}>
                    <View style={styles.iconstyle}>
                      <TouchableOpacity
                        onPress={() =>
                          item.count > 0
                            ? updateItemValue(item.id, item.count - 1)
                            : null
                        }>
                        <Icon
                          name="minus"
                          size={12}
                          color="rgba(126, 62, 190, 1)"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.itemstextstyle}>{item.count}</Text>
                    <View style={styles.iconstyle}>
                      <TouchableOpacity
                        onPress={() =>
                          updateItemValue(item.id, item.count + 1)
                        }>
                        <Icon
                          name="plus"
                          size={12}
                          color="rgba(126, 62, 190, 1)"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.iconstyle,
                    {
                      marginTop: 15,
                      alignSelf: 'flex-start',
                      borderColor: 'red',
                      height: 25,
                      width: 25,
                      borderWidth: 2.5,
                    },
                  ]}>
                  <Icon name="close" size={14} color="red" />
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'space-between'}}>
          <Text style={styles.itemstextstyle}>Order Instructions</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setText}
            value={text}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.itemstextstyle}>Total:</Text>
            <Text
              style={[styles.itemstextstyle, {color: 'rgba(201, 204, 69, 1)'}]}>
              Rs.{totalamount}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#7E3EBE',
              alignItems: 'center',
              borderRadius: 12,
            }}>
            <Text
              style={[
                styles.itemstextstyle,
                {color: 'white', fontWeight: '700', paddingVertical: 10},
              ]}>
              Checkout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={[
                styles.itemstextstyle,
                {
                  color: 'black',
                  alignSelf: 'center',
                  fontSize: 15,
                  textShadowColor: 'rgba(0, 0, 0, 0.2)',
                  textShadowOffset: {width: 0, height: 5},
                  textShadowRadius: 2,
                },
              ]}>
              Back to Menu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 15,
    width: '100%',
    flex: 1,
  },
  itemstextstyle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 23,
  },
  listitemstyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 6,
    paddingBottom: 3,
    backgroundColor: 'transparent',
  },
  listimagegradient: {
    borderRadius: 20,
    height: Dev_Height * 0.2,
    width: Dev_Width * 0.32,
    justifyContent: 'center',
    padding: 10,
  },
  imagestyle: {
    height: Dev_Height * 0.17,
    width: Dev_Width * 0.27,
  },
  iconstyle: {
    borderRadius: 20,
    height: 22,
    width: 22,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(126, 62, 190, 1)',
  },
  itemdetailviewstyle: {
    paddingVertical: 15,
    paddingLeft: 10,
    alignContent: 'space-between',
    width: Dev_Width * 0.45,
    justifyContent: 'space-between',
  },
  addminusitemstyle: {
    flexDirection: 'row',
    width: Dev_Width * 0.25,
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#989595',
    borderRadius: 12,
    padding: 15,
  },
});
