
import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Box, Text, Image, VStack, HStack, Input, Icon, Badge, Center, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { id: '1', name: 'Desktop', image: require('../../assets/desktop.png') },
    { id: '2', name: 'Laptops', image: require('../../assets/laptop.png') },
    
  ];

  const featuredProducts = [
    { id: '1', name: 'Product 1', image: require('../../assets/lap-1.jpg'), price: '$99.99' },
    { id: '2', name: 'Product 2', image: require('../../assets/lap-2.jpg'), price: '$199.99' },
    
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Category', { category: item.name })}>
      <Center marginX={3}>
        <Image source={item.image} alt={item.name} size="sm" />
        <Text>{item.name}</Text>
      </Center>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}>
      <Box marginX={3}>
        <Image source={item.image} alt={item.name} size="lg" />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </Box>
    </TouchableOpacity>
  );

  return (
    <ScrollView backgroundColor="#fff">
      <VStack space={4} padding={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" bold>Grabatoz</Text>
          <Input
            placeholder="Search Products..."
            width="70%"
            borderRadius="4"
            py="1"
            px="2"
            fontSize="14"
            InputLeftElement={<Icon as={<MaterialIcons name="search" />} size="sm" m={2} />}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon as={<MaterialIcons name="shopping-cart" />} size="lg" />
            <Badge // Badge to show cart item count
              colorScheme="danger"
              rounded="full"
              mb={-3}
              mr={-2}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{
                fontSize: 12,
              }}
            >
              3
            </Badge>
          </TouchableOpacity>
        </HStack>

        <Carousel
          data={featuredProducts}
          renderItem={renderProduct}
          sliderWidth={300}
          itemWidth={300}
          loop={true}
          autoplay={true}
          containerCustomStyle={{ marginVertical: 20 }}
        />

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

export default HomeScreen;
