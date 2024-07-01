import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SellerInfo = ({ seller }) => (
  <Text style={styles.soldBy}>Sold by: {seller}</Text>
);

const styles = StyleSheet.create({
  soldBy: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default SellerInfo;
