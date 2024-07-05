


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderSummaryScreen = ({ navigation, route }) => {
  const { products, paymentMethod } = route.params;

  const getTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      // Check if product.price is a number and add it to totalPrice
      const price = parseFloat(product.price);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    });
    return totalPrice;
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Summary</Text>

      <View style={styles.productDetails}>
        <Text style={styles.sectionTitle}>Products:</Text>
        {products.map((product, index) => (
          <View key={index} style={styles.product}>
            <Text>{product.name}</Text>
            <Text>
              $
              {isNaN(parseFloat(product.price))
                ? '0.00'
                : parseFloat(product.price).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.paymentDetails}>
        <Text style={styles.sectionTitle}>Payment Method:</Text>
        <Text>{paymentMethod}</Text>
      </View>

      <View style={styles.totalAmount}>
        <Text style={styles.sectionTitle}>Total Amount:</Text>
        <Text>${getTotalPrice().toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDetails: {
    marginBottom: 20,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  paymentDetails: {
    marginBottom: 20,
  },
  totalAmount: {
    marginBottom: 20,
  },
  placeOrderButton: {
    backgroundColor: '#00AA00',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  placeOrderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OrderSummaryScreen; 
