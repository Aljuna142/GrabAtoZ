

/*
one line but not responsive 



import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductFeatures = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Icon name="money" size={20} color="green" />
          <Icon name="circle" size={8} color="yellow" style={styles.overlayIcon} />
        </View>
        <Text style={styles.featureText}>Lowest Price</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="money" size={20} color="green" />
        <Text style={styles.featureText}>Cash on Delivery</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="refresh" size={20} color="green" />
        <Icon name="circle" size={8} color="yellow" style={styles.overlayIcon} />
        <Text style={styles.featureText}>15-day Returns Policy</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="lock" size={20} color="green" />
        <Text style={styles.featureText}>Secure Transaction</Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const isSmallScreen = width < 768;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15, // Adjust spacing between features
  },
  featureText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 5,
  },
  iconContainer: {
    position: 'relative',
  },
  overlayIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});

export default ProductFeatures;*/

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductFeatures = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Icon name="money" size={20} color="green" />
          <Icon name="circle" size={8} color="yellow" style={styles.overlayIcon} />
        </View>
        <Text style={styles.featureText}>Lowest Price</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="money" size={20} color="green" />
        <Text style={styles.featureText}>Cash on Delivery</Text>
      </View>
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Icon name="refresh" size={20} color="green" />
          <Icon name="circle" size={8} color="yellow" style={styles.overlayIcon} />
        </View>
        <Text style={styles.featureText}>15-day Returns Policy</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="lock" size={20} color="green" />
        <Text style={styles.featureText}>Secure Transaction</Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const isSmallScreen = width < 768;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'#fff',
    flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: isSmallScreen ? 8 : 0,
  },
  featureText: {
    fontSize: 12,
    color: '#333',
     fontFamily: 'Arial',
    marginLeft: 5,

  },
  iconContainer: {
    position: 'relative',
  },
  overlayIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});

export default ProductFeatures;


/*import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductFeatures = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Icon name="money" size={20} color="green" />
          <Icon name="circle" size={8} color="yellow" style={styles.overlayIcon} />
        </View>
        <Text style={styles.featureText}>Lowest Price</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="money" size={20} color="green" />
        <Text style={styles.featureText}>Cash on Delivery</Text>
      </View>
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Icon name="refresh" size={20} color="green" />
          <Icon name="circle" size={8} color="yellow" style={styles.overlayIcon} />
        </View>
        <Text style={styles.featureText}>15-day Returns Policy</Text>
      </View>
      <View style={styles.feature}>
        <Icon name="lock" size={20} color="green" />
        <Text style={styles.featureText}>Secure Transaction</Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const isSmallScreen = width < 768;

const styles = StyleSheet.create({
  container: {
    flexDirection: isSmallScreen ? 'row' : 'row',
    backgroundColor: '#fff',
    flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
    alignItems: 'center',
    justifyContent: isSmallScreen ? 'flex-start' : 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#758DAA',
    borderBottomWidth: 1,
    borderBottomColor: '#758DAA',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: isSmallScreen ? 8 : 0,
    flexBasis: isSmallScreen ? '50%' : 'auto', // Ensures wrapping on small screens
  },
  featureText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 5,
    fontFamily: 'Arial', // Change this to your desired font-family
  },
  iconContainer: {
    position: 'relative',
  },
  overlayIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});

export default ProductFeatures;*/






