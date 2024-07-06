// AddressSection.js

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const AddressSection = ({ onNewAddressPress, onEditAddressPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onNewAddressPress}>
          <Text style={styles.buttonText}>New Address</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onEditAddressPress}>
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '48%', // Adjust width as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressSection;
