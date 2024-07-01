import React from 'react';
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

export default CustomerReviews;
