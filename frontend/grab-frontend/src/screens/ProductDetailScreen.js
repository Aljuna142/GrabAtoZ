




// ProductDetailsScreen.js

// ProductDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentImageIndex(index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.swiperContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          onScroll={handleScroll} 
          scrollEventThrottle={16} 
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {productImages.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {productImages.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.dot, 
                currentImageIndex === index ? styles.activeDot : styles.inactiveDot
              ]} 
            />
          ))}
        </View>
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => console.log('Add to Cart pressed')} />
      <Button title="Buy Now" onPress={() => console.log('Buy Now pressed')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  swiperContainer: {
    width: screenWidth,
    height: 300,
  },
  scrollView: {
    width: screenWidth,
    height: 300,
  },
  imageContainer: {
    width: screenWidth,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ProductDetailsScreen;

