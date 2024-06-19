
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FeaturedProductItem = ({ product }) => {
  return (
    <View style={styles.productItem}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    marginRight: 20,
    width: 150,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default FeaturedProductItem;
