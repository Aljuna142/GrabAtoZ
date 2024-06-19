
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.categoryItem}>
      <Image source={category.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
      <Text style={styles.categoryDescription}>{category.description}</Text>
      <Text style={styles.categoryPrice}>{category.price}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Buy Now" onPress={() => {}} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Add to Cart" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 20,
    width: 150,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 5,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
  },
  categoryPrice: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});

export default CategoryItem;
