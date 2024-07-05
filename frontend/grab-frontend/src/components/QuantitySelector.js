




/*import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrementQuantity}>
        <Text style={[styles.buttonText, styles.decrementButtonText]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={incrementQuantity}>
        <Text style={[styles.buttonText, styles.incrementButtonText]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  decrementButton: {
    borderColor: 'red',
  },
  incrementButton: {
    borderColor: 'green',
  },
  buttonText: {
    fontSize: 18,
  },
  decrementButtonText: {
    color: 'red',
  },
  incrementButtonText: {
    color: 'green',
  },
});

export default QuantitySelector;*/




/*import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrementQuantity}>
        <Text style={[styles.buttonText, styles.decrementButtonText]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={incrementQuantity}>
        <Text style={[styles.buttonText, styles.incrementButtonText]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: '',
    marginVertical: 10,
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  decrementButton: {
    borderColor: 'red',
  },
  incrementButton: {
    borderColor: 'green',
  },
  buttonText: {
    fontSize: 18,
  },
  decrementButtonText: {
    color: 'red',
  },
  incrementButtonText: {
    color: 'green',
  },
});

export default QuantitySelector;correct */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrementQuantity}>
        <Text style={[styles.buttonText, styles.decrementButtonText]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={incrementQuantity}>
        <Text style={[styles.buttonText, styles.incrementButtonText]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  decrementButton: {
    borderColor: 'red',
  },
  incrementButton: {
    borderColor: 'green',
  },
  buttonText: {
    fontSize: 18,
  },
  decrementButtonText: {
    color: 'red',
  },
  incrementButtonText: {
    color: 'green',
  },
});

export default QuantitySelector;
