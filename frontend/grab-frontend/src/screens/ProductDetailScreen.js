


 /*import React from 'react';
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
    navigation.navigate('Cart'); // Navigate to Cart screen after adding to cart screen 
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

export default ProductDetailsScreen; good without scrolling*/




/*import React from 'react';
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
    navigation.navigate('Cart'); // Navigate to Cart screen after adding to cart screen 
  };

  return (
    <ScrollView
     contentContainerStyle={styles.scrollViewContent} 
     style={styles.container}>
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
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  content: {
    flex: 1,
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


/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
    navigation.navigate('Cart');
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

const styles = StyleSheet.create({;
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

export default ProductDetailsScreen; scrolling refresh*/


import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Platform } from 'react-native'; // Import Platform from react-native
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
    navigation.navigate('Cart');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}>
      <View style={styles.content}>
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
            <Button title="Add to Cart" onPress={handleAddToCart} />
          </View>
        </View>
        {/* Add more content if needed to ensure ScrollView triggers scrolling*/ }
        {/* Example: }
        {/* <View style={{ height: 1000 }} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webScrollView: {
    height: '100vh', // Adjust height for web
    overflowY: 'scroll', // Enable scrolling for web
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20, // Adjust as needed
  },
  content: {
    flexGrow: 1,
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

export default ProductDetailsScreen; 






