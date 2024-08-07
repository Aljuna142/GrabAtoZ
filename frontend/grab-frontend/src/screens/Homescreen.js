


 /*igood searchingmport React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import CardComponent from '../components/CardComponent';
import Banner from '../components/Banner';
import ResponsiveGrid from '../components/ResponsiveGrid';
import RecentlyViewedItems from '../components/RecentlyViewedItems';
import BrandsSection from '../components/BrandsSection';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredFeaturedProducts, setFilteredFeaturedProducts] = useState([]);
  const [recentlyViewedItems, setRecentlyViewedItems] = useState([]);
  const navigation = useNavigation();

  const theme = useSelector((state) => state.theme); // Get the theme from Redux

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
    { id: '1', name: 'Lenovo IdeaCentre AIO 3 24ALC6 (2021) Desktop', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '2', name: 'Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color', image: require('../assets/images/Asus.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '3', name: 'MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey', image: require('../assets/images/msi.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '4', name: 'ASUS TUF A15 FA507RE-HN049W Gaming Laptop AMD R7-6800H 16GB Ram 512GB SSD Nvidia RTX 3050TI 4GB 15.6″ FHD 144Hz Win11', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '5', name: 'HP VICTUS 15-Fa1093dx Core™ I5-13420H, 512GB SSD 8GB 15.6″ (1920×1080) 144Hz IPS WIN11 NVIDIA® RTX 3050 6144MB 6GB GRAPHICS Blue Backlit Keyboard', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '6', name: 'Lenovo Thinkpad T14 G2 Intel Core I7-1185G7 VPro 16GB RAM 256GB SSD 14” Touch FHD IPS Win11Pro English Keyboard', image: require('../assets/images/msi.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '7', name: 'Acer Aspire 3 Intel Core I5-1235U 8GB Ram 512GB SSD Intel Iris Xe Graphics 15.6″ FHD Win11 ENG Keyboard Silver Color', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '8', name: 'Product 8', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '9', name: 'Product 9', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
  ];

  useEffect(() => {
    if (searchQuery) {
      const filteredCats = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filteredCats);

      const filteredProducts = featuredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFeaturedProducts(filteredProducts);
    } else {
      setFilteredCategories(categories);
      setFilteredFeaturedProducts(featuredProducts);
    }
  }, [searchQuery]);

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

  const handlePressItem = (itemId) => {
    console.log('Recently Viewed Item Pressed:', itemId);
  };

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <Container style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Content contentContainerStyle={styles.content}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} goToWishlist={goToWishlist} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={Platform.OS === 'web' ? styles.webScrollView : { flex: 1 }}
          showsVerticalScrollIndicator={true}>
          <Banner />
          <RecentlyViewedItems items={recentlyViewedItems} onPressItem={handlePressItem} />
          <BrandsSection />
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollView}>
              {filteredCategories.map(category => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Featured Products</Text>
            <ResponsiveGrid>
              <FlatList
                data={filteredFeaturedProducts}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                columnWrapperStyle={styles.columnWrapper}
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
    backgroundColor: '#f4f4f4', // Example background color
  },
  content: {
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  webScrollView: {
    height: '100vh',
    overflowY: 'scroll',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScrollView: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    //justifyContent: '',
    marginHorizontal: 5, // Adjust margin to minimize space between items
  },
  flatListContent: {
    paddingVertical: 10,
  },
  card: {
    marginBottom: 10,
    flex: 1,
    //margin: 0, // Ensure cards have some margin for better spacing
  },
});

export default HomeScreen;*/

import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import CardComponent from '../components/CardComponent';
import Banner from '../components/Banner';
import ResponsiveGrid from '../components/ResponsiveGrid';
import RecentlyViewedItems from '../components/RecentlyViewedItems';
import BrandsSection from '../components/BrandsSection';
import CategoriesSection from '../components/CategoriesSection';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredFeaturedProducts, setFilteredFeaturedProducts] = useState([]);
  const [recentlyViewedItems, setRecentlyViewedItems] = useState([]);
  const navigation = useNavigation();

  const theme = useSelector((state) => state.theme); // Get the theme from Redux

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
    { id: '1', name: 'Lenovo IdeaCentre AIO 3 24ALC6 (2021) Desktop', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '2', name: 'Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color', image: require('../assets/images/Asus.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '3', name: 'MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey', image: require('../assets/images/msi.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '4', name: 'ASUS TUF A15 FA507RE-HN049W Gaming Laptop AMD R7-6800H 16GB Ram 512GB SSD Nvidia RTX 3050TI 4GB 15.6″ FHD 144Hz Win11', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '5', name: 'HP VICTUS 15-Fa1093dx Core™ I5-13420H, 512GB SSD 8GB 15.6″ (1920×1080) 144Hz IPS WIN11 NVIDIA® RTX 3050 6144MB 6GB GRAPHICS Blue Backlit Keyboard', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '6', name: 'Lenovo Thinkpad T14 G2 Intel Core I7-1185G7 VPro 16GB RAM 256GB SSD 14” Touch FHD IPS Win11Pro English Keyboard', image: require('../assets/images/msi.png'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '7', name: 'Acer Aspire 3 Intel Core I5-1235U 8GB Ram 512GB SSD Intel Iris Xe Graphics 15.6″ FHD Win11 ENG Keyboard Silver Color', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '8', name: 'Product 8', image: require('../assets/images/lap-2.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
    { id: '9', name: 'Product 9', image: require('../assets/images/lap-1.jpg'), price: '$199.99', rating: 4.0, reviews: 8 },
  ];

  useEffect(() => {
    if (searchQuery) {
      const filteredCats = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filteredCats);

      const filteredProducts = featuredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFeaturedProducts(filteredProducts);
    } else {
      setFilteredCategories(categories);
      setFilteredFeaturedProducts(featuredProducts);
    }
  }, [searchQuery]);

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

  const handlePressItem = (itemId) => {
    console.log('Recently Viewed Item Pressed:', itemId);
  };

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <Container style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Content contentContainerStyle={styles.content}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} goToWishlist={goToWishlist} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={Platform.OS === 'web' ? styles.webScrollView : { flex: 1 }}
          showsVerticalScrollIndicator={true}>
          <Banner />
          <RecentlyViewedItems items={recentlyViewedItems} onPressItem={handlePressItem} />
          <Text> Top Brands</Text>
          <BrandsSection />
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Categories</Text>
            <CategoriesSection categories={filteredCategories} />
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Featured Products</Text>
            <ResponsiveGrid>
              <FlatList
                data={filteredFeaturedProducts}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                columnWrapperStyle={styles.columnWrapper}
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
    backgroundColor: '#f4f4f4', // Example background color
  },
  content: {
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  webScrollView: {
    height: '100vh',
    overflowY: 'scroll',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScrollView: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    marginHorizontal: 5, // Adjust margin to minimize space between items
  },
  flatListContent: {
    paddingVertical: 10,
  },
  card: {
    marginBottom: 10,
    flex: 1,
  },
});

export default HomeScreen;
