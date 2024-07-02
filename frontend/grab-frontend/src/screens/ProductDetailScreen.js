

import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native'; // Import ScrollView for vertical scrolling
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
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <StartProduct product={product} similarProducts={similarProducts} />
        </View>
        <View style={styles.column}>
          <EndProduct product={product} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
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














