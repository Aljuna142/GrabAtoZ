import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Grabatoz' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
