
 
 
 
 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Homescreen';
import WishlistScreen from '../screens/WishlistScreen';
//import ProductDetailsScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        {/*<Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />  */}

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;