

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <StartProduct product={product} similarProducts={similarProducts} />
          </View>
          <View style={styles.column}>
            <EndProduct product={product} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional: Add background color if needed
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

export default ProductDetailsScreen;





