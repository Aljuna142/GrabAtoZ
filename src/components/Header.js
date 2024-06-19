import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const Header = ({ navigation, searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Add state variable

  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          underlineColor="transparent"
          activeUnderlineColor="#7DDA58"
          onFocus={() => setIsSearchFocused(true)} // Update state when focused
          onBlur={() => setIsSearchFocused(false)} // Update state when blurred
          theme={{ colors: { primary: '#7DDA58' } }}
        />
        <TouchableOpacity onPress={() => console.log('Search')} style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={24}
            style={[
              styles.searchIcon,
              isSearchFocused && styles.searchIconFocused // Apply focused style conditionally
            ]}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    maxWidth: screenWidth * 0.6,
  },
  searchButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
  },
  searchIcon: {
    color: '#888',
    backgroundColor: 'transparent',
  },
  searchIconFocused: {
    color: '#7DDA58', // Green color when focused
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  cartIcon: {
    marginRight: 10,
  },
});

export default Header;


