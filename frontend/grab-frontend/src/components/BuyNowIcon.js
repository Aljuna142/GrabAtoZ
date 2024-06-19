
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BuyNowIcon = ({ onPress }) => {
  const [isPressed, setIsPressed] = useState(false); // State to track press status

  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle press status
    onPress(); // Call the onPress function passed from the parent component
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <Ionicons name="basket" size={24} color={isPressed ? '#09A022' : 'grey'} />
    </TouchableOpacity>
  );
};

export default BuyNowIcon;





/*import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BuyNowIcon = ({ isPressed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Ionicons name="basket" size={24} color={isPressed ? '#2FAC44' : 'grey'} />
    </TouchableOpacity>
  );
};

export default BuyNowIcon;*/
