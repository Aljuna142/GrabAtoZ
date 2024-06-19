
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeartIcon = ({ isFavorite, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isFavorite ? (
        <Ionicons name="heart" size={24} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={24} color="grey" />
      )}
    </TouchableOpacity>
  );
};

export default HeartIcon;
