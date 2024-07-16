








import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions, FlatList, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import ProductTable from '../components/ProductTable';
import ProductFeatures from '../components/ProductFeatures';
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { productId } = route.params;
  const product = products.find((item) => item.id === Number(productId));

  const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width >= 768);

  useEffect(() => {
    const handleDimensionChange = ({ window }) => {
      setIsLargeScreen(window.width >= 768);
    };

    Dimensions.addEventListener('change', handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  }, []);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Product not found</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigation.navigate('Cart');
  };

  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}
    >
      <FlatList
        data={product.images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageSlider}
      />
      {isLargeScreen ? (
        <View style={styles.largeScreenLayout}>
          <View style={styles.row}>
            <View style={styles.column}>
              <StartProduct
                product={product}
                similarProducts={similarProducts}
                onPressAddToCart={handleAddToCart}
              />
            </View>
            <View style={styles.column}>
              <EndProduct product={product} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <ProductFeatures />
            </View>
            <View style={styles.column}>
              <ProductTable product={product} />
            </View>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.singleColumn}>
            <StartProduct
              product={product}
              similarProducts={similarProducts}
              onPressAddToCart={handleAddToCart}
            />
          </View>
          <View style={styles.singleColumn}>
            <EndProduct product={product} />
          </View>
          <View style={styles.singleColumn}>
            <ProductFeatures />
          </View>
          <View style={styles.singleColumn}>
            <ProductTable product={product} />
          </View>
        </>
      )}
      {/* <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity> */}
      <View style={styles.reviewsSection}>
        <Text style={styles.reviewsHeader}>Customer Reviews</Text>
        {/* Add your customer reviews component here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#E4E4E4', // Body background color
  },
  webScrollView: {
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#E4E4E4', // Body background color
  },
  largeScreenLayout: {
    backgroundColor: '#FFF', // Container background color for large screens
    borderRadius: 10, // Example: Add rounded corners
    padding: 10, // Example: Add padding
    marginBottom: 20, // Example: Add margin if needed
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20, // Spacing between rows
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 10, // Spacing between columns
  },
  singleColumn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 10, // Spacing between containers
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Roboto_700Bold',
  },
  imageSlider: {
    marginBottom: 20,
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: 300, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  /*addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },*/
});

export default ProductDetailsScreen;



























