




/*import React from 'react';
import {  StyleSheet, FlatList, Dimensions } from 'react-native';
import CardComponent from './CardComponent';

const LargerView = ({ data }) => {
  const renderProductItem = ({ item }) => (
    <CardComponent
      key={item.id}
      title={item.name}
      price={item.price}
      image={item.image}
      rating={item.rating}
      reviews={item.reviews}
      onBuyNow={() => console.log('Buy Now pressed for', item.name)}
      style={styles.card}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProductItem}
      keyExtractor={item => item.id}
      numColumns={4} // Number of columns for larger screens
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: 2,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    maxWidth: Dimensions.get('window').width / 4 - 20, // Adjust width for larger screens
    minWidth: 150,
  },
});

export default LargerView;*/
