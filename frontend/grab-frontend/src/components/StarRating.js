
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const validRating = typeof rating === 'number' && rating >= 0 && rating <= maxStars ? rating : 0;
  const filledStars = Math.floor(validRating);
  const halfStar = validRating - filledStars >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - filledStars - halfStar;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {Array(filledStars).fill().map((_, index) => (
        <Ionicons key={`filled-${index}`} name="star" size={16} color="#FFD700" />
      ))}
      {halfStar === 1 && <Ionicons name="star-half" size={16} color="#FFD700" />}
      {Array(emptyStars).fill().map((_, index) => (
        <Ionicons key={`empty-${index}`} name="star-outline" size={16} color="#FFD700" />
      ))}
    </View>
  );
};

export default StarRating;








/*import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars > 0.5 ? 1 : 0;
  const emptyStars = maxStars - filledStars - halfStar;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {Array(filledStars).fill().map((_, index) => (
        <Ionicons key={`filled-${index}`} name="star" size={16} color="#FFD700" />
      ))}
      {halfStar === 1 && <Ionicons name="star-half" size={16} color="#FFD700" />}
      {Array(emptyStars).fill().map((_, index) => (
        <Ionicons key={`empty-${index}`} name="star-outline" size={16} color="#FFD700" />
      ))}
    </View>
  );
};

export default StarRating;*/
