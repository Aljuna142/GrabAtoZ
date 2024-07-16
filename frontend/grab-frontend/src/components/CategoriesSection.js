/*import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryItem from './CategoryItem'; // Make sure this path is correct

const CategoriesSection = ({ categories }) => {
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

  const renderCategoryItem = (category, isSecondContainer, index) => {
    let backgroundColor = '#F56600'; // Default background color

    if (isSecondContainer) {
      if (index === 0 || index === 3) {
        backgroundColor = '#C1DAE0'; // First and fourth items in second container
      } else if (index === 1 || index === 2) {
        backgroundColor = '#FEEAEB'; // Second and third items in second container
      }
    }

    return (
      <View key={category.id} style={[styles.categoryItemContainer, { backgroundColor }]}>
        <CategoryItem category={category} />
      </View>
    );
  };

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
  categoryItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd', // Border color
  },
});

export default CategoriesSection;sqaure*/


/* first container colorimport React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryItem from './CategoryItem'; // Make sure this path is correct

const CategoriesSection = ({ categories }) => {
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

  const renderCategoryItem = (category, containerIndex, itemIndex) => {
    let backgroundColor = '#F56600'; // Default background color

    if (containerIndex === 0) {
      if (itemIndex === 0 || itemIndex === 3) {
        backgroundColor = '#DDDDDD'; // First and fourth items in first container
      } else if (itemIndex === 1 || itemIndex === 2) {
        backgroundColor = '#FEEAEB'; // Second and third items in first container
      }
    } else if (containerIndex === 1) {
      if (itemIndex === 0 || itemIndex === 3) {
        backgroundColor = '#C1DAE0'; // First and fourth items in second container
      } else if (itemIndex === 1 || itemIndex === 2) {
        backgroundColor = '#FEEAEB'; // Second and third items in second container
      }
    }

    return (
      <View key={category.id} style={[styles.categoryItemContainer, { backgroundColor }]}>
        <CategoryItem category={category} />
      </View>
    );
  };

  const renderCategoryContainers = () => {
    const categoryContainers = [];
    for (let i = 0; i < categories.length; i += 4) {
      const containerIndex = i / 4;
      categoryContainers.push(
        <View key={i} style={[styles.categoryContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {categories.slice(i, i + 4).map((category, index) => renderCategoryItem(category, containerIndex, index))}
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
  categoryItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50, // Making it oval-shaped
    borderColor: '#ddd', // Border color
  },
});

export default CategoriesSection;*/


/*good color shape missimport React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryItem from './CategoryItem'; // Make sure this path is correct

const CategoriesSection = ({ categories }) => {
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

  const renderCategoryItem = (category, containerIndex, itemIndex) => {
    let backgroundColor = '#F56600'; // Default background color

    if (containerIndex === 0) {
      if (itemIndex === 0 || itemIndex === 3) {
        backgroundColor = '#DDDDDD'; // First and fourth items in first container
      } else if (itemIndex === 1 || itemIndex === 2) {
        backgroundColor = '#FEEAEB'; // Second and third items in first container
      }
    } else if (containerIndex === 1) {
      backgroundColor = '#F56600'; // All items in the second container
    }

    return (
      <View key={category.id} style={[styles.categoryItemContainer, { backgroundColor }]}>
        <CategoryItem category={category} />
      </View>
    );
  };

  const renderCategoryContainers = () => {
    const categoryContainers = [];
    for (let i = 0; i < categories.length; i += 4) {
      const containerIndex = i / 4;
      categoryContainers.push(
        <View key={i} style={[styles.categoryContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {categories.slice(i, i + 4).map((category, index) => renderCategoryItem(category, containerIndex, index))}
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
  categoryItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50, // Making it oval-shaped
    borderColor: '#ddd', // Border color
  },
});

export default CategoriesSection;color good shape missing*/


/*import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryItem from './CategoryItem'; // Make sure this path is correct

const CategoriesSection = ({ categories }) => {
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

  const renderCategoryItem = (category, containerIndex, itemIndex) => {
    let backgroundColor = '#F56600'; // Default background color

    if (containerIndex === 0) {
      backgroundColor = '#000000'; // All items in the first container
    } else if (containerIndex === 1) {
      backgroundColor = '#BBFBE0'; // All items in the second container
    }

    return (
      <View key={category.id} style={[styles.categoryItemContainer, { backgroundColor }]}>
        <CategoryItem category={category} />
      </View>
    );
  };

  const renderCategoryContainers = () => {
    const categoryContainers = [];
    for (let i = 0; i < categories.length; i += 4) {
      const containerIndex = i / 4;
      categoryContainers.push(
        <View key={i} style={[styles.categoryContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {categories.slice(i, i + 4).map((category, index) => renderCategoryItem(category, containerIndex, index))}
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
  categoryItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    borderColor: '#ddd', // Border color
  },
});

export default CategoriesSection;remote listener err*/


import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryItem from './CategoryItem'; // Make sure this path is correct

const CategoriesSection = ({ categories }) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateScreenWidth);

    // Cleanup function
    return () => {
      if (Dimensions.removeEventListener) {
        Dimensions.removeEventListener('change', updateScreenWidth);
      }
    };
  }, []);

  const renderCategoryItem = (category, containerIndex, itemIndex) => {
    let backgroundColor = '#F56600'; // Default background color

    if (containerIndex === 0) {
      backgroundColor = '#000000'; // All items in the first container
    } else if (containerIndex === 1) {
      backgroundColor = '#BBFBE0'; // All items in the second container
    }

    return (
      <View key={category.id} style={[styles.categoryItemContainer, { backgroundColor }]}>
        <CategoryItem category={category} />
      </View>
    );
  };

  const renderCategoryContainers = () => {
    const categoryContainers = [];
    for (let i = 0; i < categories.length; i += 4) {
      const containerIndex = i / 4;
      categoryContainers.push(
        <View key={i} style={[styles.categoryContainer, { width: screenWidth > 600 ? '48%' : '100%' }]}>
          {categories.slice(i, i + 4).map((category, index) => renderCategoryItem(category, containerIndex, index))}
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
  categoryItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Adjust as needed
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    borderColor: '#ddd', // Border color
  },
});

export default CategoriesSection;

