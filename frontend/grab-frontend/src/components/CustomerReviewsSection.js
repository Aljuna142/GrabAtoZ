import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import StarRating from './StarRating'; // Adjust the path as necessary

const CustomerReviewsSection = ({ reviews }) => {
  // Calculate the average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Render individual review item
  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewerName}>{item.name}</Text>
      <StarRating rating={item.rating} />
      <Text style={styles.reviewText}>{item.text}</Text>
      <Text style={styles.reviewDate}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Rating Summary */}
      <View style={styles.ratingSummary}>
        <Text style={styles.averageRating}>{averageRating.toFixed(1)}</Text>
        <StarRating rating={averageRating} />
        <Text style={styles.totalReviews}>{reviews.length} Reviews</Text>
      </View>

      {/* Individual Reviews List */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewItem}
        style={styles.reviewsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  ratingSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  averageRating: {
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 8,
  },
  totalReviews: {
    marginLeft: 8,
    fontSize: 16,
  },
  reviewsList: {
    marginTop: 16,
  },
  reviewItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  reviewerName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewText: {
    marginBottom: 4,
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
  },
});

export default CustomerReviewsSection;
