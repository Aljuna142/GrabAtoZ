
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import CardComponent from '../components/CardComponent';
import Banner from '../components/Banner';
import ResponsiveGrid from '../components/ResponsiveGrid';
import RecentlyViewedItems from '../components/RecentlyViewedItems'; // Import RecentlyViewedItems component
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentlyViewedItems, setRecentlyViewedItems] = useState([]);
  const navigation = useNavigation();

  const categories = [
    { id: '1', name: 'HP', description: 'This is the description', price: '$499.99', image: require('../assets/images/lap-1.jpg') },
    { id: '2', name: 'HP 2', description: 'This is the description', price: '$599.99', image: require('../assets/images/lap-2.jpg') },
    { id: '3', name: 'Asus', description: 'This is the description', price: '$699.99', image: require('../assets/images/Asus.png') },
    { id: '4', name: 'Hp3', description: 'This is the description', price: '$799.99', image: require('../assets/images/lap-1.jpg') },
    { id: '5', name: 'Hp4', description: 'This is the description', price: '$899.99', image: require('../assets/images/lap-2.jpg') },
    { id: '6', name: 'Msi', description: 'This is the description', price: '$999.99', image: require('../assets/images/msi.png') },
    { id: '7', name: 'Hp5', description: 'This is the description', price: '$1099.99', image: require('../assets/images/lap-2.jpg') },
    { id: '8', name: 'Hp6', description: 'This is the description', price: '$1199.99', image: require('../assets/images/lap-1.jpg') },
  ];

  const featuredProducts = [
    { id: '1', name: 'Product 1', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '2', name: 'Product 2', image: require('../assets/images/Asus.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '3', name: 'Product 3', image: require('../assets/images/msi.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '4', name: 'Product 4', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '5', name: 'Product 5', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '6', name: 'Product 6', image: require('../assets/images/msi.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '7', name: 'Product 7', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '8', name: 'Product 8', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '9', name: 'Product 9', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
  ];

  const renderCategoryItem = ({ item }) => (
    <CategoryItem key={item.id} category={item} />
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log('Navigating to ProductDetails with product:', item);
        navigation.navigate('ProductDetails', { product: item });
      }}>
      <CardComponent
        key={item.id}
        id={item.id}
        title={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
        rating={item.rating}
        reviews={item.reviews}
        onAddToCart={() => console.log('Add to Cart pressed for', item.name)}
        onBuyNow={() => console.log('Buy Now pressed for', item.name)}
        style={styles.card}
      />
    </TouchableOpacity>
  );

  const { width } = Dimensions.get('window');
  const numColumns = width < 600 ? 2 : 4;

  // Function to handle press on RecentlyViewedItems
  const handlePressItem = (itemId) => {
    // Add logic to handle press on recently viewed item
    console.log('Recently Viewed Item Pressed:', itemId);
  };

  // Function to navigate to the Wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} goToWishlist={goToWishlist} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={Platform.OS === 'web' ? styles.webScrollView : { flex: 1 }}
          showsVerticalScrollIndicator={true}>
          <Banner />
          <RecentlyViewedItems items={recentlyViewedItems} onPressItem={handlePressItem} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollView}>
              {categories.map(category => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <ResponsiveGrid>
              <FlatList
                data={featuredProducts}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                columnWrapperStyle={[styles.columnWrapper, { marginHorizontal: 2 }]}
                contentContainerStyle={styles.flatListContent}
              />
            </ResponsiveGrid>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  horizontalScrollView: {
    paddingHorizontal: 10,
  },
  webScrollView: {
    height: '100vh',
    overflowY: 'scroll',
  },
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
    maxWidth: Dimensions.get('window').width / 2 - 20,
    minWidth: 150,
  },
});

export default HomeScreen;





