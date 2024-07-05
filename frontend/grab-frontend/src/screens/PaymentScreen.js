// PaymentScreen.js

/*import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const handleCashOnDelivery = () => {
    // Navigate to confirmation or success screen for Cash on Delivery
    navigation.navigate('OrderSuccess', { paymentMethod: 'Cash on Delivery' });
  };

  const handleEmiratesNBDBank = () => {
    // Navigate to payment gateway for Emirates NBD
    // You can implement further logic here for payment processing
    navigation.navigate('OrderSuccess', { paymentMethod: 'Emirates NBD' });
  };

  const handleMobileBanking = () => {
    // Navigate to payment gateway for Mobile Banking
    // You can implement further logic here for payment processing
    navigation.navigate('OrderSuccess', { paymentMethod: 'Mobile Banking' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>
      <TouchableOpacity style={styles.option} onPress={handleCashOnDelivery}>
        <Text>Cash on Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleEmiratesNBDBank}>
        <Text>Emirates NBD Bank</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleMobileBanking}>
        <Text>Mobile Banking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default PaymentScreen;*/

/*import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const handleCashOnDelivery = () => {
    // Navigate to confirmation or success screen for Cash on Delivery
    navigation.navigate('OrderSuccess', { paymentMethod: 'Cash on Delivery' });
  };

  const handleEmiratesNBDBank = () => {
    // Navigate to payment gateway for Emirates NBD
    // You can implement further logic here for payment processing
    navigation.navigate('OrderSuccess', { paymentMethod: 'Emirates NBD' });
  };

  const handleMobileBanking = () => {
    // Navigate to payment gateway for Mobile Banking
    // You can implement further logic here for payment processing
    navigation.navigate('OrderSuccess', { paymentMethod: 'Mobile Banking' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#00AA00' }]} onPress={handleCashOnDelivery}>
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#0077FF' }]} onPress={handleEmiratesNBDBank}>
        <Text style={styles.optionText}>Emirates NBD Bank</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#FF8800' }]} onPress={handleMobileBanking}>
        <Text style={styles.optionText}>Mobile Banking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color for options
  },
});

export default PaymentScreen;without order summary*/

// In PaymentScreen.js

/*import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const handleCashOnDelivery = () => {
    navigation.navigate('OrderSummary', {
      products: yourProductsArray, // Replace with your actual products array
      paymentMethod: 'Cash on Delivery',
    });
  };

  const handleEmiratesNBDBank = () => {
    navigation.navigate('OrderSummary', {
      products: yourProductsArray,
      paymentMethod: 'Emirates NBD Bank',
    });
  };

  const handleMobileBanking = () => {
    navigation.navigate('OrderSummary', {
      products: yourProductsArray,
      paymentMethod: 'Mobile Banking',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#00AA00' }]} onPress={handleCashOnDelivery}>
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#0077FF' }]} onPress={handleEmiratesNBDBank}>
        <Text style={styles.optionText}>Emirates NBD Bank</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#FF8800' }]} onPress={handleMobileBanking}>
        <Text style={styles.optionText}>Mobile Banking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color for options
  },
});
export default PaymentScreen;*/



  // PaymentScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { products } from '../data/product'; // Import your products array

const PaymentScreen = ({ navigation }) => {
  const handleCashOnDelivery = () => {
    navigation.navigate('OrderSummary', {
      products: products,
      paymentMethod: 'Cash on Delivery',
    });
  };

  const handleEmiratesNBDBank = () => {
    navigation.navigate('OrderSummary', {
      products: products,
      paymentMethod: 'Emirates NBD Bank',
    });
  };

  const handleMobileBanking = () => {
    navigation.navigate('OrderSummary', {
      products: products,
      paymentMethod: 'Mobile Banking',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#00AA00' }]} onPress={handleCashOnDelivery}>
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#0077FF' }]} onPress={handleEmiratesNBDBank}>
        <Text style={styles.optionText}>Emirates NBD Bank</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { backgroundColor: '#FF8800' }]} onPress={handleMobileBanking}>
        <Text style={styles.optionText}>Mobile Banking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color for options
  },
});

export default PaymentScreen;







