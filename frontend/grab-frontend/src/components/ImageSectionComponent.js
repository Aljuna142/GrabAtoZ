
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'; // Import the Swiper component

const ImageSectionComponent = ({ images }) => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false}>
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSectionComponent;






