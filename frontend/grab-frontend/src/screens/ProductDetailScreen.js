


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


/*import React from 'react';
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
        {/* Add more content if needed to ensure ScrollView triggers scrolling}
        {/* Example: }
        {/* <View style={{ height: 1000 }} /> }
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

export default ProductDetailsScreen; scrolling working*/

/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';
import ProductTable from '../components/ProductTable'; // Import ProductTable component

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
        
        {/* Displaying ProductTable }
        <ProductTable product={product} />

        {/* Add more content if needed to ensure ScrollView triggers scrolling }
       { /* Example: }
        {/* <View style={{ height: 1000 }} /> }
        
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

export default ProductDetailsScreen;with more information*/








/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';
import ProductTable from '../components/ProductTable';
import ProductFeatures from '../components/ProductFeatures'; // Assuming ProductFeatures component name

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
        {/* First Row: StartProduct and EndProduct }
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

        {/* Second Row: Product Features and Product Table }
        <View style={styles.row}>
          <View style={[styles.column, styles.productFeaturesColumn]}>
            {/* Product Features component }
            <ProductFeatures product={product} />
          </View>
          <View style={[styles.column, styles.productTableColumn]}>
            {/* Product Table component }
            <ProductTable product={product} />
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
    marginBottom: 16, // Adjust spacing between rows
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  productFeaturesColumn: {
    marginRight: 8, // Adjust spacing between columns
  },
  productTableColumn: {
    marginLeft: 8, // Adjust spacing between columns
  },
});

export default ProductDetailsScreen;correct align ment first row and second row*/





/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';
import ProductTable from '../components/ProductTable';
import ProductFeatures from '../components/ProductFeatures';

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
        {/* First Row: StartProduct and EndProduct }
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

        {/* Second Row: Product Features and Product Table }
        <View style={styles.row}>
          <View style={[styles.column, styles.productFeaturesColumn]}>
            {/* Product Features component }
            <ProductFeatures product={product} />
          </View>
          <View style={[styles.column, styles.productTableColumn]}>
            {/* Product Table component }
            <ProductTable product={product} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color for container (if needed)
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff', // Background color for scroll view
  },
  webScrollView: {
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#fff', // Background color for scroll view content
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#fff', // Background color for content area
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  productFeaturesColumn: {
    marginRight: 8,
  },
  productTableColumn: {
    marginLeft: 8,
  },
});

export default ProductDetailsScreen;product deature alignment msing*/


/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products, similarProducts } from '../data/product';
import StartProduct from '../components/StartProduct';
import EndProduct from '../components/EndProduct';
import ProductFeatures from '../components/ProductFeatures'; // Import ProductFeatures component
import { addToCart } from '../store/actions/cartActions';
import { useNavigation } from '@react-navigation/native';
import ProductTable from '../components/ProductTable'; // Import ProductTable component

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
          </View>
        </View>
        
        {/* Displaying ProductTable }
        <ProductTable product={product} />

        {/* Product Features section }
        <ProductFeatures />

        {/* Customer Reviews section }
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
        
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
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;below product featues*/

/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
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
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}
    >
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
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20, // Adjust as needed
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure the items wrap in smaller screens
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%', // Ensure each column takes up 50% width
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;*/


/* prefect import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
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
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}
    >
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
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // This will set the background color for the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff', // This will set the background color for the ScrollView
  },
  webScrollView: {
    height: '100vh', // Adjust height for web
    overflowY: 'scroll', // Enable scrolling for web
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20, // Adjust as needed
    backgroundColor: '#fff', // This will set the background color for the content
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure the items wrap in smaller screens
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%', // Ensure each column takes up 50% width
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;perfect*/



/*mobile view import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
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

  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 768;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}
    >
      <View style={styles.content}>
        {isSmallScreen ? (
          <>
            <View style={styles.row}>
              <View style={styles.column}>
                <StartProduct
                  product={product}
                  similarProducts={similarProducts}
                  onPressAddToCart={handleAddToCart}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.column}>
                <EndProduct product={product} />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.column}>
                <ProductFeatures />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.column}>
                <ProductTable product={product} />
              </View>
            </View>
          </>
        ) : (
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
            <View style={styles.column}>
              <ProductFeatures />
            </View>
            <View style={styles.column}>
              <ProductTable product={product} />
            </View>
          </View>
        )}
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20, // Adjust as needed
    backgroundColor: '#fff', // Set background color for content
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure items wrap in smaller screens
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%', // Ensure each column takes up 50% width
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;*/




/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
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

  const screenWidth = Dimensions.get('window').width;
  const isLargeScreen = screenWidth >= 768; // Adjust breakpoint as needed

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
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}
    >
      <View style={styles.content}>
        {isLargeScreen ? (
          <>
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
          </>
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
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
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
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%',
  },
  singleColumn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;mobile and laptop view pakka without refreshing*/


/* pakka with refreshing import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
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
      style={Platform.OS === 'web' ? styles.webScrollView : styles.scrollView}
    >
      <View style={styles.content}>
        {isLargeScreen ? (
          <>
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
          </>
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
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
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
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%',
  },
  singleColumn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;*/





/*import React, { useState, useEffect } from 'react';
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
        <Text>Product not found</Text>
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
      <View style={styles.content}>
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
          <>
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
          </>
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
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here }
        </View>
      </View>
    </ScrollView>
  );
};

/*const styles = StyleSheet.create({
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
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%',
  },
  singleColumn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  reviewsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
});*/

/*const styles = StyleSheet.create({
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
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%',
  },
  singleColumn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
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
});




export default ProductDetailsScreen;*/


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
  console.log('Font styles:', styles.text);
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
      <View style={styles.content}>
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
          <>
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
          </>
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
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsHeader}>Customer Reviews</Text>
          {/* Add your customer reviews component here*/}
        </View>
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
    height: '100vh',
    overflowY: 'scroll',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: '50%',
  },
  singleColumn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
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
});

export default ProductDetailsScreen;





















