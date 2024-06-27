
 
// src/App.js

// App.js

// App.js

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Homescreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProductDetailsScreen from '../screens/ProductDetailScreen';
import ProfileScreen from '../screens/ProfileScreen'; // Import the ProfileScreen component

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Wishlist" 
          component={WishlistScreen} 
          options={{ title: 'Wishlist' }} 
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen} 
          options={{ title: 'Product Details' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






/*import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Homescreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProductDetailsScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Wishlist" 
          component={WishlistScreen} 
          options={{ title: 'Wishlist' }} 
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen} 
          options={{ title: 'Product Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/




/*import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Homescreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProductDetailsScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/





/*import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'; 
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Homescreen';
import WishlistScreen from '../screens/WishlistScreen';


const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" headerMode="none">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/


