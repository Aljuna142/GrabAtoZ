import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentMethod = ({ onSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelect = (method) => {
    setSelectedMethod(method);
    onSelect(method);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method:</Text>
      <TouchableOpacity
        style={[styles.method, selectedMethod === 'CashOnDelivery' && styles.selectedMethod]}
        onPress={() => handleSelect('CashOnDelivery')}
      >
        <Text>Cash on Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.method, selectedMethod === 'MobileBanking' && styles.selectedMethod]}
        onPress={() => handleSelect('MobileBanking')}
      >
        <Text>Mobile Banking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  method: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedMethod: {
    backgroundColor: 'lightblue',
  },
});

export default PaymentMethod;
