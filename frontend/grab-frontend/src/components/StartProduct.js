
import React from 'react';
import { View, FlatList, Image, Button, StyleSheet, Dimensions } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts }) => {
  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const renderHorizontalImageSwiper = () => (
    <View style={styles.horizontalSwiperContainer}>
      <FlatList
        data={productImages}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
      />
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => console.log('Add to Cart pressed')} />
        <Button title="Buy Now" onPress={() => console.log('Buy Now pressed')} />
      </View>
    </View>
  );

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
});

export default StartProduct;


