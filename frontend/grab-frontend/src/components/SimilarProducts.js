// components/SimilarProducts.js

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const SimilarProducts = ({ data }) => {
  const renderSimilarProduct = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {/* Add more details if needed */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Similar Products</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSimilarProduct}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listContainer: {
    paddingBottom: 16,
  },
  item: {
    marginRight: 16,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
  },
});

export default SimilarProducts;
