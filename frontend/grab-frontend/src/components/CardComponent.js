

import React, { useState } from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from './HeartIcon'; 
import CartIcon from './CartIcon'; 
import BuyNowIcon from './BuyNowIcon'; 
import StarRating from './StarRating'; 


const CardComponent = ({ title, description, price, rating, reviews, image, onAddToCart, onAddToFavorites, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status
  const [isCartPressed, setIsCartPressed] = useState(false); // State to track cart press status

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status
  };

  const toggleCartPressed = () => {
    setIsCartPressed(!isCartPressed); // Toggle cart press status
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image 
            source={image}  
            style={styles.cardImage} 
          />
          {/* Render heart icon at the top corner*/}
          <View style={styles.heartIconContainer}>
            <HeartIcon isFavorite={isFavorite} onPress={toggleFavorite} />
          </View>
        </CardItem>
        <CardItem header>
          <Text>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{description}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <View style={styles.footerView}>
            <Text style={styles.priceText}>{price}</Text>
            <StarRating rating={rating} />
            <Text style={styles.reviewsText}>{reviews} Reviews</Text>
          </View>
          <View style={styles.iconContainer}>
            <CartIcon isCartPressed={isCartPressed} onPress={toggleCartPressed} />
            <View style={styles.iconSpace} /> {/*  space between icons */}
           
            <View style={styles.iconSpace} /> {/*  space between icons */}
            <BuyNowIcon onPress={onBuyNow} /> {/* Render Buy Now icon */}
          </View>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5, // Add margin to create space between cards
    width: Dimensions.get('window').width * 0.45, // Adjust card width based on screen size
  },
  cardImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  footerView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  reviewsText: {
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    marginTop: 10,
  },
  iconSpace: {
    width: 10,      //  desired space between icons
  },
});

export default CardComponent; 

