
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









/*import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageGallerySwiper from 'react-native-image-gallery-swiper'; // Import the ImageGallerySwiper component

const ImageSectionComponent = ({ images }) => {
  return (
    <View style={styles.container}>
      <ImageGallerySwiper
        style={styles.gallery}
        images={images.map(image => ({ source: { uri: image } }))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gallery: {
    flex: 1,
    backgroundColor: 'black', // Customize background color as needed
  },
});

export default ImageSectionComponent;*/










/*import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const ImageSectionComponent = ({ images }) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollView}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10, // Add some padding if needed
  },
  imageContainer: {
    marginRight: 10, // Adjust spacing between images
  },
  image: {
    width: 150, // Adjust image width as needed
    height: 150, // Adjust image height as needed
    borderRadius: 8, // Add border radius for rounded corners
  },
});

export default ImageSectionComponent;*/

