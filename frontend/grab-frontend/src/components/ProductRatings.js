import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductRatings = ({ ratings }) => (
  <View style={styles.ratings}>
    <Text style={styles.ratingsText}>Ratings: {ratings}</Text>
    {/* Add star rating component if needed */}
  </View>
);

const styles = StyleSheet.create({
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingsText: {
    fontSize: 16,
    marginRight: 8,
  },
});

export default ProductRatings;
