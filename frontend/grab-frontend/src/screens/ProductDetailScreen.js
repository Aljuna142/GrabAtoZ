



/*perfect llayout without scrolling import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions'; // Ensure the correct path
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ProductDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize useNavigation hook
  const { productId } = route.params;
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigation.navigate('Cart'); // Navigate to Cart screen after adding to cart
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <StartProduct product={product} similarProducts={similarProducts} onPressAddToCart={handleAddToCart} />
          </View>
          <View style={styles.column}>
            <EndProduct product={product} />
            <Button title="Add to Cart" onPress={handleAddToCart} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

export default ProductDetailsScreen;*/



















