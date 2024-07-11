




import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import StarRating from './StarRating';
import { ProgressBar } from 'react-native-paper'; // You can use any progress bar library or create your own

const ratingsBreakdown = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 13 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 4 },
];

const CustomerReviewsSection = ({ reviews = [] }) => {
  const renderReview = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewText}>{item.text}</Text>
      <StarRating rating={item.rating} />
    </View>
  );

  const keyExtractor = (item, index) => (item && item.id ? item.id.toString() : index.toString());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      <Text style={styles.overallRating}>4.5 out of 5 stars</Text>
      <Text style={styles.globalRatings}>31,015 global ratings</Text>

      <View style={styles.ratingsBreakdown}>
        {ratingsBreakdown.map((item) => (
          <View key={item.stars} style={styles.ratingRow}>
            <Text style={styles.starText}>{item.stars} star</Text>
            <ProgressBar progress={item.percentage / 100} style={styles.progressBar} />
            <Text style={styles.percentageText}>{item.percentage}%</Text>
          </View>
        ))}
      </View>

      <Text style={styles.howRatingsCalculated}>How are ratings calculated?</Text>
      <Text style={styles.reviewPrompt}>Review this product</Text>
      <Text style={styles.shareThoughts}>Share your thoughts with other customers</Text>
      <Text style={styles.writeReview}>Write a customer review</Text>

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
  overallRating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  globalRatings: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  ratingsBreakdown: {
    marginBottom: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starText: {
    fontSize: 14,
    width: 60,
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 8,
  },
  percentageText: {
    fontSize: 14,
    width: 40,
  },
  howRatingsCalculated: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 16,
  },
  reviewPrompt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareThoughts: {
    fontSize: 14,
    marginBottom: 8,
  },
  writeReview: {
    fontSize: 14,
    color: 'blue',
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

export default CustomerReviewsSection;*/







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
