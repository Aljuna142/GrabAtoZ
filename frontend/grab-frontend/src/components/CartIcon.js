/*import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartIcon = ({ isCartPressed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Ionicons name="cart" size={24} color={isCartPressed ? '#FE9900' : 'grey'} />
    </TouchableOpacity>
  );
};

export default CartIcon;*/

import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartIcon = () => {
  const [isCartPressed, setIsCartPressed] = useState(false);

  const handlePress = () => {
    setIsCartPressed(!isCartPressed);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <Ionicons name="cart" size={24} color={isCartPressed ? '#FE9900' : 'grey'} />
    </TouchableOpacity>
  );
};

export default CartIcon;




/*import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CartIcon = ({ onPress, isInCart }) => {
  return (
    <Pressable onPress={onPress} style={styles.icon}>
      <MaterialIcons name="shopping-cart" size={24} color={isInCart ? 'yellow' : 'gray'} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
});

export default CartIcon;*/



