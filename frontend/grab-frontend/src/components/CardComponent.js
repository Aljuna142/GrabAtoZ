






import React, { useState } from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2; // Display 4 cards per row on screens wider than 1000, 2 cards per row otherwise
  const cardWidth = width / cardsPerRow - 10; // Adjust for margin and spacing between cards

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setWishlistItems([...wishlistItems, { title, description, price, rating, reviews, image }]);
    } else {
      const updatedWishlist = wishlistItems.filter(item => item.title !== title);
      setWishlistItems(updatedWishlist);
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
    justifyContent: 'space-between', // Ensure equal spacing between cards
    marginHorizontal: -5, // Compensate for card margin
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
    top: 5, // Adjust the top positioning to ensure it doesn't overlap with the fourth card
    right: 5, // Adjust the right positioning if needed
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






/* large screen 4 cards import React, { useState } from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2; // Display 4 cards per row on screens wider than 1000, 2 cards per row otherwise
  const cardWidth = width / cardsPerRow - 10; // Adjust for margin and spacing between cards

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setWishlistItems([...wishlistItems, { title, description, price, rating, reviews, image }]);
    } else {
      const updatedWishlist = wishlistItems.filter(item => item.title !== title);
      setWishlistItems(updatedWishlist);
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
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
    top: 5, // Adjust the top positioning to ensure it doesn't overlap with the fourth card
    right: 5, // Adjust the right positioning if needed
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








/* three cards lg scrn import React, { useState } from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const { width } = useWindowDimensions();

  const cardsPerRow = width > 1000 ? 4 : 2; // Display 4 cards per row on screens wider than 1000, 2 cards per row otherwise
  const cardWidth = width / cardsPerRow - 10; // Adjust for margin and spacing between cards

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setWishlistItems([...wishlistItems, { title, description, price, rating, reviews, image }]);
    } else {
      const updatedWishlist = wishlistItems.filter(item => item.title !== title);
      setWishlistItems(updatedWishlist);
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <Card style={[styles.card, { width: cardWidth }]}>
        <CardItem cardBody>
          <Image source={image} style={styles.cardImage} />
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
            <CartIcon onPress={onAddToCart} />
            <View style={styles.iconSpace} />
            <BuyNowIcon onPress={onBuyNow} />
          </View>
        </CardItem>
      </Card>
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


/* usual import React, { useState } from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const { width } = useWindowDimensions();

  const cardsPerRow = width > 600 ? 3 : 2; // Display 3 cards per row on larger screens, 2 cards per row otherwise
  const cardWidth = width / cardsPerRow - 10; // Adjust for margin and spacing between cards

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setWishlistItems([...wishlistItems, { title, description, price, rating, reviews, image }]);
    } else {
      const updatedWishlist = wishlistItems.filter(item => item.title !== title);
      setWishlistItems(updatedWishlist);
    }
  };

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <Card style={[styles.card, { width: cardWidth }]}>
        <CardItem cardBody>
          <Image source={image} style={styles.cardImage} />
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
            <CartIcon onPress={onAddToCart} />
            <View style={styles.iconSpace} />
            <BuyNowIcon onPress={onBuyNow} />
          </View>
        </CardItem>
      </Card>
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


/* cards fits without refresh import React, { useState } from 'react';
import { Card, CardItem, Text, Body, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import BuyNowIcon from './BuyNowIcon';
import StarRating from './StarRating';

const CardComponent = ({ title, description, price, rating, reviews, image, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const { width } = useWindowDimensions(); // Use the hook to get the current width of the window

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setWishlistItems([...wishlistItems, { title, description, price, rating, reviews, image }]);
    } else {
      const updatedWishlist = wishlistItems.filter(item => item.title !== title);
      setWishlistItems(updatedWishlist);
    }
  };

  const isLargeScreen = width > 600; // Adjust the threshold as needed
  const cardWidth = isLargeScreen ? width * 0.3 : width * 0.45; // Adjust card width based on screen size

  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <Card style={[styles.card, { width: cardWidth }]}>
        <CardItem cardBody>
          <Image source={image} style={styles.cardImage} />
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
            <CartIcon onPress={onAddToCart} />
            <View style={styles.iconSpace} />
            <BuyNowIcon onPress={onBuyNow} />
          </View>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
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




