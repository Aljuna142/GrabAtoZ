

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import PaymentMethod from '../components/PaymentMethod Component';
import { Right } from 'native-base';

const OrderSummaryScreen = ({ route, navigation }) => {
  const { cartItems = [], totalPrice = 0 } = route.params || {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // State to hold selected payment method
  const [isPressable, setIsPressable] = useState(true); // State to manage button pressable state

  // Render item in order summary
  const renderItem = ({ item }) => {
    const itemPrice = parseFloat(item.price);
    return (
      <View style={styles.product}>
        <Text>{item.name}</Text>
        <Text>${!isNaN(itemPrice) ? itemPrice.toFixed(2) : 'N/A'}</Text>
      </View>
    );
  };

  // Handle selecting a payment method
  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Proceed to show confirmation alert
  const placeOrder = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    // Disable button to prevent multiple taps
    setIsPressable(false);
    
    // Show confirmation alert
    Alert.alert(
      'Order Placed',
      'Your order has been successfully placed.',
      [
        {
          text: 'Continue Shopping',
          onPress: () => {
            navigation.navigate('Home'); // Navigate to Home screen
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Summary</Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.productList}
      />

      <View style={styles.totalAmount}>
        <Text style={styles.sectionTitle}>Total Amount:</Text>
        <Text>${totalPrice.toFixed(2)}</Text>
      </View>

      <PaymentMethod onSelect={handleSelectPaymentMethod} />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed || !selectedPaymentMethod || !isPressable ? 0.5 : 1 },
        ]}
        disabled={!selectedPaymentMethod || !isPressable}
        onPress={placeOrder}
      >
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>

      <Pressable
        style={styles.continueButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </Pressable>
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
  productList: {
    marginBottom: 20,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalAmount: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderSummaryScreen;

//no body will not care about making charge they are taking only GR 
 













