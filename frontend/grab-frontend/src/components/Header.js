// Header.js

// Header.js
import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CameraComponent from './Camera';

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
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>

      <Modal visible={isCameraVisible} animationType="slide">
        <CameraComponent onClose={closeCamera} />
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
    //Adjust margin
    //marginLeft: 5,

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
    //Adjust Margin
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
});

export default Header;




/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CameraComponent from './Camera';

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
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>

      <Modal visible={isCameraVisible} animationType="slide">
        <CameraComponent onClose={closeCamera} />
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
});

export default Header;*/







/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera'; 


const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation();

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
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
          <TouchableOpacity onPress={() => console.log('Camera')} style={styles.cameraButton}>
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
});

export default Header*/;




/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  // Function to navigate to the Wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => console.log('Camera')} style={styles.cameraButton}>
          <MaterialIcons
            name="photo-camera"
            size={24}
            style={[
              styles.cameraIcon,
              isSearchFocused && styles.cameraIconFocused
            ]}
          />
        </TouchableOpacity>
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
      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </TouchableOpacity>
      {/* Cart icon }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

// Styles...

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
    flex: 1,
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
  cameraButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
  },
  cameraIcon: {
    color: '#888',
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
    color: '#7DDA58', // Green color when focused
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
});



export default Header;*/












/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  // Function to navigate to the Wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

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
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          theme={{ colors: { primary: '#7DDA58' } }}
        />
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


        {/* TouchableOpacity for camera icon }
        <TouchableOpacity onPress={() => console.log('Camera icon pressed')} style={styles.cameraButton}>
          <MaterialIcons name="photo-camera" size={24} color="#888" />
        </TouchableOpacity>
      </View>


      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </TouchableOpacity>



      {/* Cart icon }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

// Styles...




const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  searchButton: {
    padding: 8,
  },
  cameraButton: {
    padding: 8,
  },
  searchIcon: {
    color: '#888',
  },
  searchIconFocused: {
    color: '#7DDA58',
  },
  wishlistButton: {
    marginLeft: 10,
  },
  cartIcon: {
    marginLeft: 15,
    color: '#333',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff3333',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 9,
  },
});

export default Header;*/







/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  // Function to navigate to the Wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => console.log('Camera icon pressed')} style={styles.cameraButton}>
          <MaterialIcons name="photo-camera" size={24} color="#888" />
        </TouchableOpacity>
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
      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </TouchableOpacity>
      {/* Cart icon }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

// Styles...
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  cameraButton: {
    padding: 8,
  },
  searchButton: {
    padding: 8,
  },
  searchIcon: {
    color: '#888',
  },
  searchIconFocused: {
    color: '#7DDA58',
  },
  wishlistButton: {
    marginLeft: 10,
  },
  cartIcon: {
    marginLeft: 15,
    color: '#333',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff3333',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 9,
  },
});

export default Header;*/



/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  // Function to navigate to the Wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

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
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          theme={{ colors: { primary: '#7DDA58' } }}
        />
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
      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </TouchableOpacity>
      {/* Cart icon }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

// Styles...
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  searchButton: {
    padding: 8,
  },
  searchIcon: {
    color: '#888',
  },
  searchIconFocused: {
    color: '#7DDA58',
  },
  wishlistButton: {
    marginLeft: 10,
  },
  cartIcon: {
    marginLeft: 15,
    color: '#333',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff3333',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 9,
  },
});

export default Header;*/







/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

// Import the heart icon component
import HeartIcon from './HeartIcon'; 

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery, goToWishlist }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

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
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          theme={{ colors: { primary: '#7DDA58' } }}
        />
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
      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <HeartIcon />
      </TouchableOpacity>
      {/* Cart icon }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

// Styles...
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  searchButton: {
    padding: 8,
  },
  searchIcon: {
    color: '#888',
  },
  searchIconFocused: {
    color: '#7DDA58',
  },
  wishlistButton: {
    marginLeft: 10,
  },
  cartIcon: {
    marginLeft: 15,
    color: '#333',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff3333',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 9,
  },
});

export default Header;*/






// Header.js

/*import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

// Import the heart icon component
import HeartIcon from './HeartIcon'; 

const screenWidth = Dimensions.get('window').width;

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  // Event handler for navigating to the wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist'); // Navigate to the Wishlist screen
  };

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
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          theme={{ colors: { primary: '#7DDA58' } }}
        />
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
      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <HeartIcon />
      </TouchableOpacity>
      {/* Cart icon }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

// Styles...

export default Header;*/






/* 11import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import HeartIcon from './HeartIcon'; // Import the heart icon component

const screenWidth = Dimensions.get('window').width;

const Header = ({ navigation, searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Add state variable

  // Event handler for navigating to the wishlist screen
  const goToWishlist = () => {
    navigation.navigate('Wishlist'); // Replace 'Wishlist' with the name of your wishlist screen
  };

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
      {/* TouchableOpacity for wishlist icon }
      <TouchableOpacity onPress={goToWishlist} style={styles.wishlistButton}>
        <HeartIcon />
      </TouchableOpacity>
      {/* Cart icon }
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
  wishlistButton: {
    marginRight: 10, // Adjust margin as needed
  },
});

export default Header;*/





/*import React, { useState } from 'react';
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
*/

