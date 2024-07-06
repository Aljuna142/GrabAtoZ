
import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

const OrderSummary = ({ route, navigation }) => {
  const { cartItems = [], totalPrice = 0 } = route.params || {};

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

  // Proceed to UserDetailsScreen
  const proceedToUserDetails = () => {
    navigation.navigate('UserDetails');
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

      <Pressable
        style={styles.button}
        onPress={proceedToUserDetails}
      >
        <Text style={styles.buttonText}>Proceed</Text>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderSummary;


