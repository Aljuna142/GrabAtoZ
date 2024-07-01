/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductInfo = ({ product }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>{product.price}</Text>
    {product.discount && <Text style={styles.discount}>{product.discount}</Text>}
    <Text style={styles.description}>{product.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoContainer: {
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
  discount: {
    fontSize: 18,
    color: 'red',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ProductInfo;*/


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductInfo = ({ product }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.specs}>{product.specs}</Text>
    <Text style={styles.price}>{product.price}</Text>
    {product.discount && <Text style={styles.discount}>{product.discount}</Text>}
    <Text style={styles.description}>{product.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  specs: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 8,
  },
  discount: {
    fontSize: 18,
    color: 'red',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ProductInfo;

