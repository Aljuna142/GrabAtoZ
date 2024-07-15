import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

const CategoryItem = ({ category }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.categoryItem} 
      onPress={() => navigation.navigate('CategoryDetail', { categoryId: category.id })}
    >
      <Image source={category.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 20,
    width: 150,
    borderRadius: 100, // Rounded corners
    overflow: 'hidden', // Ensure child elements follow the rounded corners
    backgroundColor: '#fff', // Background color for the card
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
    padding: 10, // Padding inside the card
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center', // Center align text
  },
});

export default CategoryItem;

