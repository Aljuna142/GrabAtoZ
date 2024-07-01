import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ProductLongDescription = ({ longDescription }) => (
  <Text style={styles.longDescription}>{longDescription}</Text>
);

const styles = StyleSheet.create({
  longDescription: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 16,
  },
});

export default ProductLongDescription;
