

import React from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/wishlistSlice';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ id, title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.wishlist.items.some(item => item.id === id));
  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2;
  const cardWidth = width / cardsPerRow - 10;

  const toggleFavorite = () => {
    if (isFavorite) {
      console.log(`Removing item with id: ${id}`);
      dispatch(removeItem(id));
    } else {
      console.log(`Adding item with id: ${id}`);
      dispatch(addItem({ id, title, description, price, rating, reviews, image }));
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <View style={[styles.card, { width: cardWidth }]}>
        <Card>
          <CardItem cardBody>
            <Image source={image} style={styles.cardImage} />
          </CardItem>
          <View style={styles.heartIconContainer}>
            <HeartIcon isFavorite={isFavorite} onPress={toggleFavorite} />
          </View>
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
              <CartIcon onPress={onAddToCart} />
              <View style={styles.iconSpace} />
              <BuyNowIcon onPress={onBuyNow} />
            </View>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
  
  },
  cardImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
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
  reviewsText: {
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  iconSpace: {
    width: 10,
  },
});

export default CardComponent;







/* ---working import React from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/wishlistSlice'; // Updated import to match your wishlistSlice
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ id, title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.wishlist.items.find(item => item.id === id) !== undefined); // Updated selector to match your state structure
  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2;
  const cardWidth = width / cardsPerRow - 10;

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeItem(id));
    } else {
      dispatch(addItem({ id, title, description, price, rating, reviews, image }));
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <View style={[styles.card, { width: cardWidth }]}>
        <Card>
          <CardItem cardBody>
            <Image source={image} style={styles.cardImage} />
          </CardItem>
          <View style={styles.heartIconContainer}>
            <HeartIcon isFavorite={isFavorite} onPress={toggleFavorite} />
          </View>
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
              <CartIcon onPress={onAddToCart} />
              <View style={styles.iconSpace} />
              <BuyNowIcon onPress={onBuyNow} />
            </View>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
  },
  cardImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
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
  reviewsText: {
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  iconSpace: {
    width: 10,
  },
});

export default CardComponent;*/



/*import React from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/actions';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ id, title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.wishlist.items[id] !== undefined);
  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2;
  const cardWidth = width / cardsPerRow - 10;

  const toggleFavorite = () => {
    console.log('Toggling favorite for:', id); // Added log
    if (isFavorite) {
      dispatch(removeItem({ id }));
    } else {
      dispatch(addItem({ id, title, description, price, rating, reviews, image }));
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <View style={styles.cardContainer}>
        <Card style={[styles.card, { width: cardWidth }]}>
          <CardItem cardBody>
            <Image source={image} style={styles.cardImage} />
          </CardItem>
          <View style={styles.heartIconContainer}>
            <HeartIcon isFavorite={isFavorite} onPress={toggleFavorite} />
          </View>
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
              <CartIcon onPress={onAddToCart} />
              <View style={styles.iconSpace} />
              <BuyNowIcon onPress={onBuyNow} />
            </View>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5,
  },
  card: {
    margin: 5,
  },
  cardImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
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
  reviewsText: {
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  iconSpace: {
    width: 10,
  },
});

export default CardComponent;




/*import React from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/actions';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ id, title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.wishlist.items[id] !== undefined);
  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2;
  const cardWidth = width / cardsPerRow - 10;

  const toggleFavorite = () => {

    console.log('Toggling favorite for:', id);
    if (isFavorite) {
      dispatch(removeItem(id));
    } else {
      dispatch(addItem({ id, title, description, price, rating, reviews, image }));
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <View style={styles.cardContainer}>
        <Card style={[styles.card, { width: cardWidth }]}>
          <CardItem cardBody>
            <Image source={image} style={styles.cardImage} />
          </CardItem>
          <View style={styles.heartIconContainer}>
            <HeartIcon isFavorite={isFavorite} onPress={toggleFavorite} />
          </View>
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
              <CartIcon onPress={onAddToCart} />
              <View style={styles.iconSpace} />
              <BuyNowIcon onPress={onBuyNow} />
            </View>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5,
  },
  card: {
    margin: 5,
  },
  cardImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
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
  reviewsText: {
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  iconSpace: {
    width: 10,
  },
});

export default CardComponent;*/






