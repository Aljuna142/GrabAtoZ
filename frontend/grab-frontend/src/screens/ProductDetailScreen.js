


/*import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import ImageSectionComponent from '../components/ImageSectionComponent';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  // Ensure the images are correctly required and passed as an array
  const productImages = [
    require('../assets/I/img1/11.png').uri,
    require('../assets/I/img1/12.png').uri,
    require('../assets/I/img1/13.png').uri,
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageSectionComponent images={productImages} />
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

export default ProductDetailsScreen;*/











/* cards components


const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} />
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
  image: {
    width: 300,
    height: 300,
    marginBottom: 16,
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

export default ProductDetailsScreen;*/







