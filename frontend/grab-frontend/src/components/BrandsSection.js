


/*import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    { id: '8', name: 'Apple', image: require('../assets/BrandLogo/apple logo.png') }, // Adding Apple logo
    // Add more brands as needed
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
        <View key={i} style={[styles.brandContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    backgroundColor: '#fff', // Background color for large container
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
    backgroundColor: '#F56600', // Background color for brand items
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

export default BrandsSection;perfect grid 1x4*/



/*import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    { id: '8', name: 'Apple', image: require('../assets/BrandLogo/apple logo.png') }, // Adding Apple logo
    // Add more brands as needed
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

  const renderBrandItem = (brand, isSecondContainer) => (
    <TouchableOpacity
      key={brand.id}
      style={[styles.brandItem, isSecondContainer && styles.secondContainerItem]}
    >
      <Image source={brand.image} style={styles.brandImage} />
      <Text style={styles.brandName}>{brand.name}</Text>
    </TouchableOpacity>
  );

  const renderBrandContainers = () => {
    const brandContainers = [];
    for (let i = 0; i < brands.length; i += 4) {
      const isSecondContainer = (i / 4) === 1;
      brandContainers.push(
        <View key={i} style={[styles.brandContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {brands.slice(i, i + 4).map(brand => renderBrandItem(brand, isSecondContainer))}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    backgroundColor: '#fff', // Background color for large container
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
    backgroundColor: '#F56600', // Background color for brand items
  },
  secondContainerItem: {
    backgroundColor: '#642784', // Background color for items in the second container
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



/*import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const BrandsSection = () => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    { id: '8', name: 'Apple', image: require('../assets/BrandLogo/apple logo.png') }, // Adding Apple logo
    // Add more brands as needed
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

  const renderBrandItem = (brand, isSecondContainer, index) => {
    let backgroundColor = '#F56600'; // Default background color

    if (isSecondContainer) {
      if (index === 0 || index === 3) {
        backgroundColor = '#C1DAE0'; // First and fourth items in second container
      } else if (index === 1 || index === 2) {
        backgroundColor = '#FEEAEB'; // Second and third items in second container
      }
    }

    return (
      <TouchableOpacity
        key={brand.id}
        style={[styles.brandItem, { backgroundColor }]}
      >
        <Image source={brand.image} style={styles.brandImage} />
        <Text style={styles.brandName}>{brand.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderBrandContainers = () => {
    const brandContainers = [];
    for (let i = 0; i < brands.length; i += 4) {
      const isSecondContainer = (i / 4) === 1;
      brandContainers.push(
        <View key={i} style={[styles.brandContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {brands.slice(i, i + 4).map((brand, index) => renderBrandItem(brand, isSecondContainer, index))}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    backgroundColor: '#fff', // Background color for large container
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
    backgroundColor: '#F56600', // Default background color for brand items
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

export default BrandsSection;clickable*/


/*some missing import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const BrandsSection = ({ onBrandPress }) => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    { id: '8', name: 'Apple', image: require('../assets/BrandLogo/apple logo.png') },
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

  const renderBrandItem = (brand, isSecondContainer, index) => {
    let backgroundColor = '#F56600';

    if (isSecondContainer) {
      if (index === 0 || index === 3) {
        backgroundColor = '#C1DAE0';
      } else if (index === 1 || index === 2) {
        backgroundColor = '#FEEAEB';
      }
    }

    return (
      <TouchableOpacity
        key={brand.id}
        style={[styles.brandItem, { backgroundColor }]}
        onPress={() => onBrandPress(brand.name)}
      >
        <Image source={brand.image} style={styles.brandImage} />
        <Text style={styles.brandName}>{brand.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderBrandContainers = () => {
    const brandContainers = [];
    for (let i = 0; i < brands.length; i += 4) {
      const isSecondContainer = (i / 4) === 1;
      brandContainers.push(
        <View key={i} style={[styles.brandContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {brands.slice(i, i + 4).map((brand, index) => renderBrandItem(brand, isSecondContainer, index))}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  brandItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#F56600',
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

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const BrandsSection = ({ onBrandPress }) => {
  const brands = [
    { id: '1', name: 'HP', image: require('../assets/BrandLogo/hp logo.png') },
    { id: '2', name: 'Asus', image: require('../assets/BrandLogo/asus logo.png') },
    { id: '3', name: 'Acer', image: require('../assets/BrandLogo/acer logo.png') },
    { id: '4', name: 'Lenovo', image: require('../assets/BrandLogo/lenovo logo.png') },
    { id: '5', name: 'Dell', image: require('../assets/BrandLogo/dell logo 2.png') },
    { id: '6', name: 'Microsoft Surface', image: require('../assets/BrandLogo/microsoft surface logo.png') },
    { id: '7', name: 'MSI', image: require('../assets/BrandLogo/msi logo.png') },
    { id: '8', name: 'Apple', image: require('../assets/BrandLogo/apple logo.png') },
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

  const renderBrandItem = (brand) => {
    return (
      <TouchableOpacity
        key={brand.id}
        style={styles.brandItem}
        onPress={() => onBrandPress(brand.name)}
      >
        <Image source={brand.image} style={styles.brandImage} />
        <Text style={styles.brandName}>{brand.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderBrandContainers = () => {
    return (
      <View style={styles.container}>
        {brands.map(brand => renderBrandItem(brand))}
      </View>
    );
  };

  return (
    <View style={styles.outerContainer}>
      {renderBrandContainers()}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  brandItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth > 600 ? '20%' : '30%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#F56600',
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




