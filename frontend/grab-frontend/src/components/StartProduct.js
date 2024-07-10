


/*import React from 'react';
import { View, ScrollView, Image, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts, onPressAddToCart }) => {
  console.log('Rendering StartProduct component');

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    onPressAddToCart(); // Call the onPressAddToCart function passed from props
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => {
    console.log('Rendering Horizontal Image Swiper');
    return (
      <View style={styles.horizontalSwiperContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
        >
          {productImages.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={item} style={styles.image} resizeMode="contain"/>
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#FFA823',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 40,
    elevation: 3,
    width: '45%', // Adjust width to fit within the container
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;button align*/


import React from 'react';
import { View, ScrollView, Image, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts, onPressAddToCart }) => {
  console.log('Rendering StartProduct component');

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    onPressAddToCart(); // Call the onPressAddToCart function passed from props
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => {
    console.log('Rendering Horizontal Image Swiper');
    return (
      <View style={styles.horizontalSwiperContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
        >
          {productImages.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={item} style={styles.image} resizeMode="contain"/>
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Pressable>
          <Pressable style={styles.buyNowButton} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  addToCartButton: {
    backgroundColor: '#FFA823', // Yellow color for Add to Cart button
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 40,
    elevation: 3,
    width: '35%', // Adjust width to fit within the container
  },
  buyNowButton: {
    backgroundColor: '#4CAF50', // Green color for Buy Now button
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 40,
    elevation: 3,
    width: '35%', // Adjust width to fit within the container
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;
