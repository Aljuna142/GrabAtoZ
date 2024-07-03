// Header.js

// Header.js

/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const openCamera = () => {
    setIsCameraVisible(true);
  };

  const closeCamera = () => {
    setIsCameraVisible(false);
  };

  const goToProfile = () => {
    navigation.navigate('Profile'); // Navigate to the 'Profile' screen
  };

  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            underlineColor="transparent"
            activeUnderlineColor="#7DDA58"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            theme={{ colors: { primary: '#7DDA58' } }}
          />
          <TouchableOpacity onPress={openCamera} style={styles.cameraButton}>
            <MaterialIcons name="photo-camera" size={24} style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log('Search')} style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={24}
            style={[
              styles.searchIcon,
              isSearchFocused && styles.searchIconFocused
            ]}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}> {/* Profile Button }
        <MaterialIcons name="account-circle" size={24} style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>

      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent }
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
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
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    maxWidth: screenWidth * 0.6,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
  },
  searchIcon: {
    color: '#888',
  },
  searchIconFocused: {
    color: '#7DDA58',
  },
  cameraButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
    // marginRight: 5,
  },
  cameraIcon: {
    color: '#888',
  },
  wishlistButton: {
    marginRight: 10,
  },
  cartIcon: {
    marginRight: 10,
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  profileButton: {
    marginRight: 10, // Adjust as needed
  },
  profileIcon: {
    color: '#888',
  },
});

export default Header;*/



import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const openCamera = () => {
    setIsCameraVisible(true);
  };

  const closeCamera = () => {
    setIsCameraVisible(false);
  };

  const goToProfile = () => {
    navigation.navigate('Profile'); // Navigate to the 'Profile' screen
  };

  const goToCart = () => {
    navigation.navigate('Cart'); // Navigate to the 'Cart' screen
  };

  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            underlineColor="transparent"
            activeUnderlineColor="#7DDA58"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            theme={{ colors: { primary: '#7DDA58' } }}
          />
          <TouchableOpacity onPress={openCamera} style={styles.cameraButton}>
            <MaterialIcons name="photo-camera" size={24} style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log('Search')} style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={24}
            style={[
              styles.searchIcon,
              isSearchFocused && styles.searchIconFocused
            ]}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}> {/* Profile Button */}
        <MaterialIcons name="account-circle" size={24} style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>

      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
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
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    maxWidth: screenWidth * 0.6,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
  },
  searchIcon: {
    color: '#888',
  },
  searchIconFocused: {
    color: '#7DDA58',
  },
  cameraButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
    // marginRight: 5,
  },
  cameraIcon: {
    color: '#888',
  },
  wishlistButton: {
    marginRight: 10,
  },
  cartIcon: {
    marginRight: 10,
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  profileButton: {
    marginRight: 10, // Adjust as needed
  },
  profileIcon: {
    color: '#888',
  },
});

export default Header;


