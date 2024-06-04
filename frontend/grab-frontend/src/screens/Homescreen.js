

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import FeaturedProductItem from '../components/FeaturedProductItem';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

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
    { id: '1', name: 'Product 1', image: require('../assets/images/lap-1.jpg'), price: '$99.99' },
    { id: '2', name: 'Product 2', image: require('../assets/images/lap-2.jpg'), price: '$199.99' },
  ];

  return (
    <Container>
      <Content>
        <Header navigation={navigation} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ScrollView>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(category => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredProducts.map(product => (
              <FeaturedProductItem key={product.id} product={product} />
            ))}
          </ScrollView>
        </ScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default HomeScreen;


