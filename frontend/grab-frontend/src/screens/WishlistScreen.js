// WishlistScreen.js

// screens/WishlistScreen.js


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { removeItem } from '../store/actions';
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




/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { removeItem } from '../store/actions';
import CardComponent from '../components/CardComponent';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <ScrollView style={styles.scrollView}>
        {wishlist.map(item => (
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
          />
        ))}
      </ScrollView>
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
  scrollView: {
    maxHeight: 500, // Adjust this height as needed
  },
});

export default WishlistScreen;*/






/* working good wishlish showing cards import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { removeItem } from '../store/actions';
import CardComponent from '../components/CardComponent';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardComponent
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            image={item.image}
            onAddToCart={() => {}}
            onBuyNow={() => {}}
            onRemove={() => handleRemoveItem(item.id)} // Pass a function to handle removal
          />
        )}
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
});

export default WishlistScreen;*/











/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { removeItem } from '../store/wishlistSlice';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
          </View>
        )}
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
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});

export default WishlistScreen;*/




/*import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';

const WishlistScreen = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  console.log('Wishlist items:', wishlistItems);

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
        keyExtractor={(item) => item.id.toString()}
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

export default WishlistScreen;*/


