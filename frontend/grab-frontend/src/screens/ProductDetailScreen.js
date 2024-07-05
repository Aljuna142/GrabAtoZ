

/*import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { products, similarProducts } from '../data/product'; // Ensure the correct path and filename
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <StartProduct product={product} similarProducts={similarProducts} />
          </View>
          <View style={styles.column}>
            <EndProduct product={product} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional: Add background color if needed
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

/*product redux import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from '../store/actions/productActions';

const ProductDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;

  const productDetails = useSelector(state => state.products.productDetails);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(fetchProductRequest());

    // Simulate fetching product details (replace with actual API call)
    setTimeout(() => {
      try {
        // Replace with your actual logic to fetch product details based on productId
        const fetchedProduct = { id: productId, name: 'Sample Product', price: 99.99 }; // Example product
        dispatch(fetchProductSuccess(fetchedProduct));
      } catch (error) {
        dispatch(fetchProductFailure(error.message));
      }
    }, 2000); // Simulate loading delay
  }, [dispatch, productId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!productDetails) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text>Product Details:</Text>
        <Text>Name: {productDetails.name}</Text>
        <Text>Price: ${productDetails.price}</Text>
        {/* Add more product details as needed }
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
  content: {
    padding: 20,
  },
});

export default ProductDetailsScreen;*/

/*import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions'; // Ensure the correct path

const ProductDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
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
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <StartProduct product={product} similarProducts={similarProducts} />
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

export default ProductDetailsScreen;product reducers*/



/*everything good import React from 'react';
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
            <StartProduct product={product} similarProducts={similarProducts} />
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


import React from 'react';
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

export default ProductDetailsScreen;















