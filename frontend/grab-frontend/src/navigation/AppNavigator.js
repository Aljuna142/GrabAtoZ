
 
// src/App.js

// App.js

import 'react-native-gesture-handler';
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

export default App;


