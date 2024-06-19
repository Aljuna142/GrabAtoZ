
import React, { useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, Animated, useWindowDimensions } from 'react-native';

const Banner = () => {
  const { width, height } = useWindowDimensions(); // Get the width and height of the window
  const isLargeScreen = width > 1024; // Define the threshold for large screens
  const bannerHeight = isLargeScreen ? height * 0.4 : width * 0.5; // Adjust the height based on the screen width or height

  const scrollX = useRef(new Animated.Value(0)).current;

  const images = [
    require('../assets/images/banner-1.jpg'),
    require('../assets/images/banner-2.jpg'),
    require('../assets/images/banner-3.jpg'),
  ];

  return (
    <View style={[styles.bannerContainer, { height: bannerHeight }]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={[styles.bannerImage, { width, height: bannerHeight }]} resizeMode="cover" />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    overflow: 'hidden', // To prevent image overflow
  },
  bannerImage: {
    flex: 1,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 8,
  },
});

export default Banner;



