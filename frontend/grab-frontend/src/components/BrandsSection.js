/*import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    // Add more brands as needed
  ];

  const renderBrandItem = (brand) => (
    <TouchableOpacity key={brand.id} style={styles.brandItem}>
      <Image source={brand.image} style={styles.brandImage} />
      <Text style={styles.brandName}>{brand.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Brands</Text>
      <View style={styles.brandsContainer}>
        {brands.map(renderBrandItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  brandsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  brandItem: {
    alignItems: 'center',
    marginVertical: 10,
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  brandName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BrandsSection;*/

/*import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    // Add more brands as needed
  ];

  const renderBrandsGrid = (start, end) => {
    return brands.slice(start, end).map(brand => (
      <TouchableOpacity key={brand.id} style={styles.brandItem}>
        <Image source={brand.image} style={styles.brandImage} />
        <Text style={styles.brandName}>{brand.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.brandContainer, styles.outerContainer]}>
        {renderBrandsGrid(0, 4)}
      </View>
      <View style={[styles.brandContainer, styles.outerContainer]}>
        {renderBrandsGrid(4, 7)} {/* Adjust the end index based on your number of brands }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 5,
    borderRadius: 5,
  },
  outerContainer: {
    marginBottom: 20, // Adjust the margin between containers
  },
  brandItem: {
    alignItems: 'center',
    marginVertical: 10,
    width: '45%', // Adjust width as needed for spacing
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  brandName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BrandsSection;grid type*/


/*import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    // Add more brands as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Brands</Text>
      <View style={styles.brandsContainer}>
        {brands.map(brand => (
          <TouchableOpacity key={brand.id} style={styles.brandItem}>
            <Image source={brand.image} style={styles.brandImage} />
            <Text style={styles.brandName}>{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10, // Add horizontal padding to the container
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  brandsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderWidth: 1, // Add border for the entire brands container
    borderColor: '#ccc', // Border color
    borderRadius: 5, // Rounded corners for the container
    padding: 5, // Padding inside the container
  },
  brandItem: {
    alignItems: 'center',
    marginVertical: 10,
    width: '45%', // Adjust width for better spacing on larger screens
    borderWidth: 1, // Add border for each brand item
    borderColor: '#e0e0e0', // Border color for each brand item
    borderRadius: 5, // Rounded corners for each brand item
    padding: 10, // Padding inside each brand item
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  brandName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BrandsSection;*/



/*one and one large import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    // Add more brands as needed
  ];

  const renderBrandItem = (brand) => (
    <TouchableOpacity key={brand.id} style={styles.brandItem}>
      <Image source={brand.image} style={styles.brandImage} />
      <Text style={styles.brandName}>{brand.name}</Text>
    </TouchableOpacity>
  );

  const renderBrandContainers = () => {
    const brandContainers = [];
    for (let i = 0; i < brands.length; i += 4) {
      brandContainers.push(
        <View key={i} style={styles.brandContainer}>
          {brands.slice(i, i + 4).map(renderBrandItem)}
        </View>
      );
    }
    return brandContainers;
  };

  return (
    <View style={styles.container}>
      {renderBrandContainers()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
  },
  brandItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  brandName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BrandsSection;*/


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    // Add more brands as needed
  ];

  const renderBrandItem = (brand) => (
    <TouchableOpacity key={brand.id} style={styles.brandItem}>
      <Image source={brand.image} style={styles.brandImage} />
      <Text style={styles.brandName}>{brand.name}</Text>
    </TouchableOpacity>
  );

  const renderBrandContainers = () => {
    const brandContainers = [];
    for (let i = 0; i < brands.length; i += 4) {
      brandContainers.push(
        <View key={i} style={styles.brandContainer}>
          {brands.slice(i, i + 4).map(renderBrandItem)}
        </View>
      );
    }
    return brandContainers;
  };

  return (
    <View style={styles.container}>
      {renderBrandContainers()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
  },
  brandItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
    backgroundColor: '#F56600', // Background color
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  brandName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BrandsSection;
