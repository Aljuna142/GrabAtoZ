

/*import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Pressable } from 'react-native';
import { Button } from 'native-base';
import StarRating from './StarRating'; // Adjust the path as necessary

const CustomerReviewsSection = ({ reviews }) => {
  const [userReview, setUserReview] = useState('');
  const [allReviews, setAllReviews] = useState(reviews);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Calculate the average rating
  const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;

  // Render individual review item
  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewerName}>{item.name}</Text>
      <StarRating rating={item.rating} />
      <Text style={styles.reviewText}>{item.text}</Text>
      <Text style={styles.reviewDate}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  // Handle submission of user review
  const handleSubmitReview = () => {
    if (userReview.trim() === '') {
      alert('Please enter your review text.');
      return;
    }
    // Assuming an id can be generated uniquely for each review
    const newReview = {
      id: allReviews.length + 1,
      name: 'User', // Replace with actual user name if available
      rating: 5, // Assuming a default rating for user input, adjust as necessary
      text: userReview,
      date: new Date().toISOString(), // Assuming current date/time
    };

    // Update the reviews state with the new review
    setAllReviews([newReview, ...allReviews]);
    setUserReview(''); // Clear input field after submission
  };

  return (
    <View style={styles.container}>
      {/* Rating Summary }
      <View style={styles.ratingSummary}>
        <Text style={styles.averageRating}>{averageRating.toFixed(1)}</Text>
        <StarRating rating={averageRating} />
        <Text style={styles.totalReviews}>{allReviews.length} Reviews</Text>
      </View>

      {/* Text input for user review }
      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        multiline
        value={userReview}
        onChangeText={(text) => setUserReview(text)}
      />
      <Button style={styles.submitButton} onPress={handleSubmitReview}>
        <Text style={styles.submitText}>Submit Review</Text>
      </Button>

      {/* Individual Reviews List }
      <FlatList
        data={showAllReviews ? allReviews : allReviews.slice(0, 2)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewItem}
        style={styles.reviewsList}
      />

      {/* View All Reviews Button }
      {allReviews.length > 2 && (
        <Pressable onPress={() => setShowAllReviews(!showAllReviews)}>
          <Text style={styles.viewAllText}>
            {showAllReviews ? 'Show Less Reviews' : 'View All Reviews'}
          </Text>
        </Pressable>
      )}
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
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#596F8B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    alignSelf: 'center',
    width: '35%',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  viewAllText: {
    color: '#596F8B',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default CustomerReviewsSection;*/


/*import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Pressable } from 'react-native';
import { Button } from 'native-base';
import StarRating from './StarRating'; // Adjust the path as necessary

const CustomerReviewsSection = ({ reviews }) => {
  const [userReview, setUserReview] = useState('');
  const [allReviews, setAllReviews] = useState(reviews);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Calculate the average rating
  const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;

  // Render individual review item
  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewerName}>{item.name}</Text>
      <StarRating rating={item.rating} />
      <Text style={styles.reviewText}>{item.text}</Text>
      <Text style={styles.reviewDate}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  // Handle submission of user review
  const handleSubmitReview = () => {
    if (userReview.trim() === '') {
      alert('Please enter your review text.');
      return;
    }
    // Assuming an id can be generated uniquely for each review
    const newReview = {
      id: allReviews.length + 1,
      name: 'User', // Replace with actual user name if available
      rating: 5, // Assuming a default rating for user input, adjust as necessary
      text: userReview,
      date: new Date().toISOString(), // Assuming current date/time
    };

    // Update the reviews state with the new review
    setAllReviews([newReview, ...allReviews]);
    setUserReview(''); // Clear input field after submission
  };

  return (
    <View style={styles.container}>
      {/* Rating Summary 
      <View style={styles.ratingSummary}>
        <Text style={styles.averageRating}>{averageRating.toFixed(1)}</Text>
        <StarRating rating={averageRating} />
        <Text style={styles.totalReviews}>{allReviews.length} Reviews</Text>
      </View>

      {/* Text input for user review 
      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        multiline
        value={userReview}
        onChangeText={(text) => setUserReview(text)}
      />
      <Button style={styles.submitButton} onPress={handleSubmitReview}>
        <Text style={styles.submitText}>Submit Review</Text>
      </Button>

      {/* Individual Reviews List 
      <FlatList
        data={showAllReviews ? allReviews : allReviews.slice(0, 2)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewItem}
        style={styles.reviewsList}
      />

      {/* View All Reviews Button 
      {allReviews.length > 2 && (
        <Pressable onPress={() => setShowAllReviews(!showAllReviews)}>
          <Text style={styles.viewAllText}>
            {showAllReviews ? 'Show Less Reviews' : 'View All Reviews'}
          </Text>
        </Pressable>
      )}
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
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#758DAA',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    alignSelf: 'center',
    width: '50%',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    textAlign: 'justify',
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
  },
  viewAllText: {
    color: '#758DAA',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});
export default CustomerReviewsSection
 export default customerReviewsSection
 export default customerReviewsSection
 review Date:{
 marginBottom:4,
 textAlign:'justify'
 }

export default CustomerReviewsSection;*/



/*import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Pressable } from 'react-native';
import { Button } from 'native-base';
import StarRating from './StarRating'; // Adjust the path as necessary

const CustomerReviewsSection = ({ reviews }) => {
  const [userReview, setUserReview] = useState('');
  const [allReviews, setAllReviews] = useState(reviews);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});

  // Calculate the average rating
  const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;

  // Handle submission of user review
  const handleSubmitReview = () => {
    if (userReview.trim() === '') {
      alert('Please enter your review text.');
      return;
    }
    // Assuming an id can be generated uniquely for each review
    const newReview = {
      id: allReviews.length + 1,
      name: 'User', // Replace with actual user name if available
      rating: 5, // Assuming a default rating for user input, adjust as necessary
      text: userReview,
      date: new Date().toISOString(), // Assuming current date/time
    };

    // Update the reviews state with the new review
    setAllReviews([newReview, ...allReviews]);
    setUserReview(''); // Clear input field after submission
  };

  // Toggle review expansion
  const toggleReviewExpansion = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Render individual review item
  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewerName}>{item.name}</Text>
      <StarRating rating={item.rating} />
      <Text style={styles.reviewText} numberOfLines={expandedReviews[item.id] ? null : 3} ellipsizeMode="tail">
        {item.text}
      </Text>
      <Pressable onPress={() => toggleReviewExpansion(item.id)}>
        <Text style={styles.viewAllText}>
          {expandedReviews[item.id] ? 'Read Less' : 'Read More'}
        </Text>
      </Pressable>
      <Text style={styles.reviewDate}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Rating Summary }
      <View style={styles.ratingSummary}>
        <Text style={styles.averageRating}>{averageRating.toFixed(1)}</Text>
        <StarRating rating={averageRating} />
        <Text style={styles.totalReviews}>{allReviews.length} Reviews</Text>
      </View>

      {/* Text input for user review }
      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        multiline
        value={userReview}
        onChangeText={(text) => setUserReview(text)}
      />
      <Button style={styles.submitButton} onPress={handleSubmitReview}>
        <Text style={styles.submitText}>Submit Review</Text>
      </Button>

      {/* Individual Reviews List }
      <FlatList
        data={showAllReviews ? allReviews : allReviews.slice(0, 2)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewItem}
        style={styles.reviewsList}
      />

      {/* View All Reviews Button }
      {allReviews.length > 2 && (
        <Pressable onPress={() => setShowAllReviews(!showAllReviews)}>
          <Text style={styles.viewAllText}>
            {showAllReviews ? 'Show Less Reviews' : 'View All Reviews'}
          </Text>
        </Pressable>
      )}
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
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#758DAA',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    alignSelf: 'center',
    width: '50%',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    textAlign: 'justify',
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
  },
  viewAllText: {
    color: '#758DAA',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default CustomerReviewsSection;*/



import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Pressable } from 'react-native';
import { Button } from 'native-base';
import StarRating from './StarRating'; // Adjust the path as necessary

const CustomerReviewsSection = ({ reviews }) => {
  const [userReview, setUserReview] = useState('');
  const [allReviews, setAllReviews] = useState(reviews);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [reviewHeights, setReviewHeights] = useState({});

  // Calculate the average rating
  const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;

  // Handle submission of user review
  const handleSubmitReview = () => {
    if (userReview.trim() === '') {
      alert('Please enter your review text.');
      return;
    }
    // Assuming an id can be generated uniquely for each review
    const newReview = {
      id: allReviews.length + 1,
      name: 'User', // Replace with actual user name if available
      rating: 5, // Assuming a default rating for user input, adjust as necessary
      text: userReview,
      date: new Date().toISOString(), // Assuming current date/time
    };

    // Update the reviews state with the new review
    setAllReviews([newReview, ...allReviews]);
    setUserReview(''); // Clear input field after submission
  };

  // Toggle review expansion
  const toggleReviewExpansion = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Render individual review item
  const renderReviewItem = ({ item }) => {
    const isExpanded = expandedReviews[item.id];
    const numberOfLines = isExpanded ? null : 3;
    const showReadMore = !isExpanded && reviewHeights[item.id] > 60;

    return (
      <View style={styles.reviewItem}>
        <Text style={styles.reviewerName}>{item.name}</Text>
        <StarRating rating={item.rating} />
        <Text
          style={styles.reviewText}
          numberOfLines={numberOfLines}
          ellipsizeMode="tail"
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setReviewHeights((prev) => ({
              ...prev,
              [item.id]: height,
            }));
          }}
        >
          {item.text}
        </Text>
        {showReadMore && (
          <Pressable onPress={() => toggleReviewExpansion(item.id)}>
            <Text style={styles.readMoreText}>Read More</Text>
          </Pressable>
        )}
        {isExpanded && (
          <Pressable onPress={() => toggleReviewExpansion(item.id)}>
            <Text style={styles.readMoreText}>Read Less</Text>
          </Pressable>
        )}
        <Text style={styles.reviewDate}>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Rating Summary */}
      <View style={styles.ratingSummary}>
        <Text style={styles.averageRating}>{averageRating.toFixed(1)}</Text>
        <StarRating rating={averageRating} />
        <Text style={styles.totalReviews}>{allReviews.length} Reviews</Text>
      </View>

      {/* Text input for user review */}
      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        multiline
        value={userReview}
        onChangeText={(text) => setUserReview(text)}
      />
      <Button style={styles.submitButton} onPress={handleSubmitReview}>
        <Text style={styles.submitText}>Submit Review</Text>
      </Button>

      {/* Individual Reviews List */}
      <FlatList
        data={showAllReviews ? allReviews : allReviews.slice(0, 2)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewItem}
        style={styles.reviewsList}
      />

      {/* View All Reviews Button */}
      {allReviews.length > 2 && (
        <Pressable onPress={() => setShowAllReviews(!showAllReviews)}>
          <Text style={styles.viewAllText}>
            {showAllReviews ? 'Show Less Reviews' : 'View All Reviews'}
          </Text>
        </Pressable>
      )}
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
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#758DAA',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    alignSelf: 'center',
    width: '50%',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    textAlign: 'justify',
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
  },
  readMoreText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  viewAllText: {
    color: '#758DAA',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default CustomerReviewsSection;



