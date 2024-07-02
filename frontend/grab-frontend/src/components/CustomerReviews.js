



import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import StarRating from './StarRating';

const CustomerReviewsSection = ({ reviews = [] }) => {
  const renderReview = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewText}>{item.text}</Text>
      <StarRating rating={item.rating} />
    </View>
  );

  // Add logging to debug the issue
  const keyExtractor = (item, index) => {
    console.log('Item:', item);
    console.log('Index:', index);
    return item && item.id ? item.id.toString() : index.toString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      {reviews.length > 0 ? (
        <FlatList
          data={reviews}
          keyExtractor={keyExtractor}
          renderItem={renderReview}
          contentContainerStyle={styles.reviewsList}
        />
      ) : (
        <Text style={styles.noReviewsText}>No reviews available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  reviewsList: {
    paddingBottom: 16,
  },
  reviewContainer: {
    marginBottom: 16,
  },
  reviewText: {
    fontSize: 16,
    marginBottom: 8,
  },
  noReviewsText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default CustomerReviewsSection;







/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerReviews = ({ reviews }) => (
  <View style={styles.reviewsSection}>
    <Text style={styles.reviewsTitle}>Customer Reviews</Text>
    {Array.isArray(reviews) && reviews.length > 0 ? (
      reviews.map((review, index) => (
        <View key={index} style={styles.review}>
          <Text style={styles.reviewText}>{review}</Text>
        </View>
      ))
    ) : (
      <Text style={styles.noReviews}>No reviews yet</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  reviewsSection: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  review: {
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 14,
    textAlign: 'left',
  },
  noReviews: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'gray',
  },
});

export default CustomerReviews;*/
