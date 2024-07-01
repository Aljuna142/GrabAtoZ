

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { products, similarProducts } from '../data/product'; // Ensure the correct path and filename
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <StartProduct product={product} similarProducts={similarProducts} />
      </View>
      <View style={styles.column}>
        <EndProduct product={product} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default ProductDetailsScreen;


