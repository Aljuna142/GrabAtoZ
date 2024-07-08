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





/*ddimport React, { useState } from 'react';
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
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}> {/* Profile Button }
        <MaterialIcons name="account-circle" size={24} style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart}>
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

/*goodimport React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation();

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
    navigation.navigate('Profile');
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
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
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}>
        <MaterialIcons name="account-circle" size={24} style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
      <Button onPress={goToSignUp} style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
      <Button onPress={goToLogin} style={styles.loginButton} bordered>
        <Text style={[styles.buttonText, { color: '#0B086B' }]}>Login</Text>
      </Button>
      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent }
      </Modal>
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
    marginRight: 10,
  },
  profileIcon: {
    color: '#888',
  },

  signUpButton: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: screenWidth < 768 ? 5 : 10,  // Reduce marginRight on larger screens
  },
  loginButton: {
    borderColor: '#0B086B',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: screenWidth < 768 ? 5 : 10,  // Adjust marginLeft on larger screens
  },
  

  /*signUpButton: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    //marginLeft:20,
    marginRight:5,

  },
  loginButton: {
    marginLeft:2,
    borderColor: '#0B086B',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'System', // Example using the default system font
    fontSize: 16, // Optional: Adjust font size
    fontWeight: 'bold', 
  }
});

export default Header; */


/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation();

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
    navigation.navigate('Profile');
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      {/* First Header }
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
          <MaterialIcons name="favorite" size={24} color="#FF0000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCart}>
          <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
          <Badge style={styles.badge}>
            <Text style={{ color: 'white' }}>3</Text>
          </Badge>
        </TouchableOpacity>
        <Button onPress={goToSignUp} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
        <Button onPress={goToLogin} style={styles.loginButton} bordered>
          <Text style={[styles.buttonText, { color: '#0B086B' }]}>Login</Text>
        </Button>
      </View>

      {/* Second Header }
      <View style={[styles.header, styles.secondHeader]}>
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
      </View>

      {/* Modal for Camera }
      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent }
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Placeholder for Camera Component</Text>
          <Button onPress={closeCamera}>
            <Text>Close Camera</Text>
          </Button>
        </View>
      </Modal>
    </>
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
  secondHeader: {
    paddingHorizontal: 10,
    paddingTop: 5, // Adjust as needed
    paddingBottom: 10, // Adjust as needed
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
  signUpButton: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: screenWidth < 768 ? 5 : 10,  // Reduce marginRight on larger screens
  },
  loginButton: {
    borderColor: '#0B086B',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: screenWidth < 768 ? 5 : 10,  // Adjust marginLeft on larger screens
  },
  buttonText: {
    color: 'white',
    fontFamily: 'System', // Example using the default system font
    fontSize: 16, // Optional: Adjust font size
    fontWeight: 'bold',
  }
});

export default Header;mobile view header pakka*/


  /*left rightimport React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation();

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
    navigation.navigate('Profile');
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      {/* First Header }
      <View style={[styles.header, styles.firstHeader]}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color="#FF0000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </TouchableOpacity>
          <Button onPress={goToSignUp} style={styles.signUpButton}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={goToLogin} style={styles.loginButton} bordered>
            <Text style={[styles.buttonText, { color: '#0B086B' }]}>Login</Text>
          </Button>
        </View>
      </View>

      {/* Second Header }
      <View style={[styles.header, styles.secondHeader]}>
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
      </View>

      {/* Modal for Camera }
      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent }
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Placeholder for Camera Component</Text>
          <Button onPress={closeCamera}>
            <Text>Close Camera</Text>
          </Button>
        </View>
      </Modal>
    </>
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
  firstHeader: {
    justifyContent: 'space-between', // Align items to the right corner
  },
  secondHeader: {
    paddingHorizontal: 10,
    paddingTop: 5, // Adjust as needed
    paddingBottom: 10, // Adjust as needed
  },
  logo: {
    width: 100,
    height: 40,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
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
  signUpButton: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: screenWidth < 768 ? 5 : 10,  // Reduce marginRight on larger screens
  },
  loginButton: {
    borderColor: '#0B086B',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: screenWidth < 768 ? 5 : 10,  // Adjust marginLeft on larger screens
  },
  buttonText: {
    color: 'white',
    fontFamily: 'System', // Example using the default system font
    fontSize: 16, // Optional: Adjust font size
    fontWeight: 'bold',
  }
});

export default Header;*/

import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Modal, useWindowDimensions } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation();
  const { width: screenWidth } = useWindowDimensions();

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
    navigation.navigate('Profile');
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return screenWidth < 768 ? (
    <>
      {/* Double Header for Mobile and Tablets */}
      <View style={[styles.header, styles.firstHeader]}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color="#FF0000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </TouchableOpacity>
          <Button onPress={goToSignUp} style={styles.signUpButton}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={goToLogin} style={styles.loginButton} bordered>
            <Text style={[styles.buttonText, { color: '#0B086B' }]}>Login</Text>
          </Button>
        </View>
      </View>

      <View style={[styles.header, styles.secondHeader]}>
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
      </View>

      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Placeholder for Camera Component</Text>
          <Button onPress={closeCamera}>
            <Text>Close Camera</Text>
          </Button>
        </View>
      </Modal>
    </>
  ) : (
    <View style={styles.header}>
      {/* Single Header for Larger Screens */}
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
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}>
        <MaterialIcons name="account-circle" size={24} style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
      <Button onPress={goToSignUp} style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
      <Button onPress={goToLogin} style={styles.loginButton} bordered>
        <Text style={[styles.buttonText, { color: '#0B086B' }]}>Login</Text>
      </Button>
      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Placeholder for Camera Component</Text>
          <Button onPress={closeCamera}>
            <Text>Close Camera</Text>
          </Button>
        </View>
      </Modal>
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
  firstHeader: {
    justifyContent: 'space-between',
  },
  secondHeader: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
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
    maxWidth: '60%',
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
    marginRight: 10,
  },
  profileIcon: {
    color: '#888',
  },
  signUpButton: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  loginButton: {
    borderColor: '#0B086B',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;



