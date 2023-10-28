import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import styles from '../Styles/homestyles';
const CustomCarousel = ({data, itemWidth, itemheigth, autoplayInterval}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      if (activeIndex < data.length - 1) {
        flatListRef.current.scrollToIndex({index: activeIndex + 1});
      } else {
        flatListRef.current.scrollToIndex({index: 0});
      }
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [activeIndex]);

  const _renderItem = ({item, index}) => (
    <LinearGradient
      colors={['rgba(126, 62, 190, 0.92)', 'rgba(126, 62, 190, 0.56)']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.promotionmainviewstyle}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={[styles.promotioninnertextstyle]}>Today’s Offer</Text>
          <Text
            style={[
              styles.promotioninnertextstyle,
              {fontSize: 22, fontWeight: '700', padding: 1},
            ]}>
            Free box of Fries
          </Text>
          <Text style={[styles.promotioninnertextstyle]}>
            on all orders above Rs.599
          </Text>
        </View>
        <Image
          style={{
            alignSelf: 'center',
            alignContent: 'center',
            height: itemheigth * 0.16,
            width: itemheigth * 0.16,
          }}
          source={require('../../assets/images/Fries.png')}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={_renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / itemWidth,
          );
          setActiveIndex(newIndex);
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CustomCarousel;
