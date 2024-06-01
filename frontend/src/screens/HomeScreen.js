// Homescreen.js
// src/screens/HomeScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;



/*import React from 'react';
import { ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { VStack, HStack, Text, Icon, Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { id: '1', name: 'Category 1', image: require('../../assets/images/lap-1.jpg') },
    { id: '2', name: 'Category 2', image: require('../../assets/images/lap-2.jpg') },
  ];

  const featuredProducts = [
    { id: '1', name: 'Product 1', image: require('../../assets/images/lap-1.jpg'), price: '$99.99' },
    { id: '2', name: 'Product 2', image: require('../../assets/images/lap-2.jpg'), price: '$199.99' },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <VStack space={4} padding={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" bold>Grabatoz</Text>
          {/* SearchBar} */
          /*
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon as={<MaterialIcons name="shopping-cart" />} size="lg" />
            <Badge
              colorScheme="danger"
              rounded="full"
              mb={-3}
              mr={-2}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{ fontSize: 12 }}
              style={styles.badgeShadow}
            >
              3
            </Badge>
          </TouchableOpacity>
        </HStack>

        <Text fontSize="xl" bold>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text fontSize="xl" bold>Featured Products</Text>
        <FlatList
          data={featuredProducts}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  badgeShadow: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // Update shadow properties to boxShadow
  },
});

export default HomeScreen;
*/

