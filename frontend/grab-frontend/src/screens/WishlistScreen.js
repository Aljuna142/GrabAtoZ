// WishlistScreen.js

// screens/WishlistScreen.js


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { removeItem } from '../store/actions/wishlistActions';
import CardComponent from '../components/CardComponent';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  // Calculate item width based on screen width
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 32) / 2; // 16px padding on both sides

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        numColumns={2} // Display 2 columns
        renderItem={({ item }) => (
          <CardComponent
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            image={item.image}
            onAddToCart={() => {}}
            onBuyNow={() => {}}
            onRemove={() => handleRemoveItem(item.id)}
            style={{ width: itemWidth }} // Set card width
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 16,
    flexGrow:1,
  },
});

export default WishlistScreen;







