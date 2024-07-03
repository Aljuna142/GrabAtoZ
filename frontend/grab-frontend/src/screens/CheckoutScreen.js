// CheckoutScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checkout Screen</Text>
      <Button
        title="Go Back to Cart"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CheckoutScreen;
