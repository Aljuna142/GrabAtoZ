


import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RecentlyViewedItems = ({ items, onPressItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently Viewed</Text>
      <FlatList
        data={items}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressItem(item.id)}>
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} /> {/* Use item.image directly */}
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
  },
  itemContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
  },
  listContent: {
    paddingLeft: 10,
  },
});

export default RecentlyViewedItems;


