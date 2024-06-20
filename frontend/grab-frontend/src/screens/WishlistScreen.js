import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const WishlistScreen = ({ wishlistItems }) => {
  // Render item function for the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wishlist</Text>
      <FlatList
        data={wishlistItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default WishlistScreen;
