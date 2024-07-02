import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductInfo from './ProductInfo';
import StarRating from './StarRating'; // Import StarRating component
import SellerInfo from './SellerInfo';
import ProductLongDescription from './ProductLongDescription';
import CustomerReviewsSection from './CustomerReviewsSection'; // Import CustomerReviewsSection component
import QuantitySelector from './QuantitySelector'; // Import QuantitySelector component

const EndProduct = ({ product }) => {
  const validRating = typeof product.ratings === 'number' ? product.ratings : 0;
  return (
    <View style={styles.container}>
      {/* Product Name & Ratings & Reviews */}
      <View style={styles.section}>
        <Text style={styles.productName}>{product.name}</Text>
        <StarRating rating={validRating} /> {/* Use StarRating component */}
        <Text>{product.reviews.length} Reviews</Text>
      </View>

      {/* Price & Discount */}
      <View style={styles.section}>
        <Text style={styles.price}>${product.price}</Text>
        {product.discount && <Text style={styles.discount}>Discount: {product.discount}</Text>}
      </View>

      {/* Quantity Selector */}
      <View style={styles.section}>
        <Text>Qty:</Text>
        <QuantitySelector onQuantityChange={(quantity) => console.log('Quantity changed:', quantity)} />
      </View>

      {/* Stock */}
      <View style={styles.section}>
        <Text style={{ color: product.stock ? 'green' : 'red' }}>
          Stock: {product.stock ? 'Available' : 'Out of Stock'}
        </Text>
      </View>

      {/* Product Long Description */}
      <View style={styles.section}>
        <ProductLongDescription longDescription={product.longDescription} />
      </View>

      {/* Customer Reviews Section */}
      <View style={styles.section}>
        <CustomerReviewsSection reviews={product.reviews} /> {/* Use CustomerReviewsSection component */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 16,
    color: 'green',
  },
});

export default EndProduct;

