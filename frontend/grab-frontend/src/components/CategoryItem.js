import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

const CategoryItem = ({ category }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.categoryItem} 
      onPress={() => navigation.navigate('CategoryDetail', { categoryId: category.id })}
    >
      <Image source={category.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 20,
    width: 150,
    borderRadius: 40, // Rounded corners
    overflow: 'hidden', // Ensure child elements follow the rounded corners
    backgroundColor: '#fff', // Background color for the card
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
    padding: 10, // Padding inside the card
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center', // Center align text
  },
});

export default CategoryItem;



/*import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

const CategoryItem = ({ category, isSecondContainer, index }) => {
  const navigation = useNavigation();

  const getBackgroundColor = () => {
    if (isSecondContainer) {
      if (index === 0 || index === 3) return '#C1DAE0';
      if (index === 1 || index === 2) return '#FEEAEB';
    }
    return '#fff';
  };

  return (
    <TouchableOpacity 
      style={[styles.categoryItem, { backgroundColor: getBackgroundColor() }]} 
      onPress={() => navigation.navigate('CategoryDetail', { categoryId: category.id })}
    >
      <Image source={category.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const CategorySection = () => {
  const categories = [
    { id: '1', name: 'Laptops', image: require('../assets/CategoryImages/laptops.png') },
    { id: '2', name: 'Tablets', image: require('../assets/CategoryImages/tablets.png') },
    { id: '3', name: 'Phones', image: require('../assets/CategoryImages/phones.png') },
    { id: '4', name: 'Accessories', image: require('../assets/CategoryImages/accessories.png') },
    { id: '5', name: 'Wearables', image: require('../assets/CategoryImages/wearables.png') },
    { id: '6', name: 'Gaming', image: require('../assets/CategoryImages/gaming.png') },
    { id: '7', name: 'Home Appliances', image: require('../assets/CategoryImages/home_appliances.png') },
    { id: '8', name: 'Cameras', image: require('../assets/CategoryImages/cameras.png') }, // Add more categories as needed
  ];

  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateScreenWidth);
    return () => {
      Dimensions.removeEventListener('change', updateScreenWidth);
    };
  }, []);

  const renderCategoryItem = (category, isSecondContainer, index) => (
    <CategoryItem key={category.id} category={category} isSecondContainer={isSecondContainer} index={index} />
  );

  const renderCategoryContainers = () => {
    const categoryContainers = [];
    for (let i = 0; i < categories.length; i += 4) {
      const isSecondContainer = (i / 4) === 1;
      categoryContainers.push(
        <View key={i} style={[styles.categoryContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {categories.slice(i, i + 4).map((category, index) => renderCategoryItem(category, isSecondContainer, index))}
        </View>
      );
    }
    return categoryContainers;
  };

  return (
    <View style={styles.container}>
      {renderCategoryContainers()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
    backgroundColor: '#fff', // Background color for large container
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
    backgroundColor: '#fff', // Default background color for category items
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center', // Center align text
  },
});

export default CategorySection;*/
