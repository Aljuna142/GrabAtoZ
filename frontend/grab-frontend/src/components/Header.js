







/*final code without theme import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, Modal, useWindowDimensions } from 'react-native';
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
      {/* Double Header for Mobile and Tablets }
      <View style={[styles.header, styles.firstHeader]}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <Pressable onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color="#FF0000" />
          </Pressable>
          <Pressable onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </Pressable>
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
            <Pressable onPress={openCamera} style={styles.cameraButton}>
              <MaterialIcons name="photo-camera" size={24} style={styles.cameraIcon} />
            </Pressable>
          </View>
          <Pressable onPress={() => console.log('Search')} style={styles.searchButton}>
            <MaterialIcons
              name="search"
              size={24}
              style={[
                styles.searchIcon,
                isSearchFocused && styles.searchIconFocused
              ]}
            />
          </Pressable>
        </View>
      </View>

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
  ) : (
    <View style={styles.header}>
      {/* Single Header for Larger Screens }
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
          <Pressable onPress={openCamera} style={styles.cameraButton}>
            <MaterialIcons name="photo-camera" size={24} style={styles.cameraIcon} />
          </Pressable>
        </View>
        <Pressable onPress={() => console.log('Search')} style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={24}
            style={[
              styles.searchIcon,
              isSearchFocused && styles.searchIconFocused
            ]}
          />
        </Pressable>
      </View>
      <Pressable onPress={goToWishlist} style={styles.wishlistButton}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" />
      </Pressable>
      <Pressable onPress={goToProfile} style={styles.profileButton}>
        <MaterialIcons name="account-circle" size={24} style={styles.profileIcon} />
      </Pressable>
      <Pressable onPress={goToCart}>
        <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
        <Badge style={styles.badge}>
          <Text style={{ color: 'white' }}>3</Text>
        </Badge>
      </Pressable>
      <Button onPress={goToSignUp} style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
      <Button onPress={goToLogin} style={styles.loginButton} bordered>
        <Text style={[styles.buttonText, { color: '#0B086B' }]}>Login</Text>
      </Button>
      <Modal visible={isCameraVisible} animationType="slide">
        {/* Your CameraComponent }
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

export default Header;*/






/*final theme basicimport React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, Modal, TextInput } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState('#0B086B'); // Default theme color
  const navigation = useNavigation();

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const openColorPicker = () => {
    setIsColorPickerVisible(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerVisible(false);
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

  // Function to handle theme change based on selected color
  const handleThemeChange = (color) => {
    setSelectedThemeColor(color);
    setIsColorPickerVisible(false); // Close the color picker modal after selecting a color
    // You can optionally save the selected color to AsyncStorage or Redux for persistence
  };

  // Dynamic styles for headers based on selected theme color
  const dynamicStyles = StyleSheet.create({
    header1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: selectedThemeColor,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    header2: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  // Theme colors array
  const themeColors = ['#65639A', '#C75051', '#68B1B4', '#547778', '#93B6B7', '#7F9FC7', '#8E7CB9', '#7B7292', '#A1CC36'];

  return (
    <>
      {/* First Header}
      <View style={dynamicStyles.header1}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <Pressable onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color="#FF0000" />
          </Pressable>
          <Pressable onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={styles.cartIcon} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </Pressable>
          <Button onPress={goToSignUp} style={[styles.signUpButton, { borderColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={goToLogin} style={[styles.loginButton, { backgroundColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Login</Text>
          </Button>
          <Pressable onPress={openColorPicker} style={styles.moreIcon}>
            <MaterialIcons name="more-vert" size={24} style={{ color: 'white' }} />
          </Pressable>
        </View>
      </View>

      {/* Second Header}
      <View style={dynamicStyles.header2}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            underlineColor="transparent"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Pressable onPress={() => console.log('Search')} style={styles.searchButton}>
            <MaterialIcons
              name="search"
              size={24}
              style={[
                styles.searchIcon,
                isSearchFocused && styles.searchIconFocused
              ]}
            />
          </Pressable>
        </View>
      </View>

      {/* Color Picker Modal }
      <Modal visible={isColorPickerVisible} animationType="slide">
        <View style={styles.colorPickerModal}>
          <Text>Choose a Theme Color:</Text>
          <View style={styles.colorPickerContainer}>
            {themeColors.map((color, index) => (
              <Pressable
                key={index}
                style={[styles.colorOption, { backgroundColor: color }]}
                onPress={() => handleThemeChange(color)}
              />
            ))}
          </View>
          <Button onPress={closeColorPicker}>
            <Text>Close</Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
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
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  signUpButton: {
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  loginButton: {
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreIcon: {
    marginLeft: 10,
  },
  colorPickerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default Header;final theme*/


/* theme basic 1 import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, Modal, TextInput } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState('#FFFFFF'); // Default theme color
  const [iconColor, setIconColor] = useState('#888'); // Default icon color

  const navigation = useNavigation();

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const openColorPicker = () => {
    setIsColorPickerVisible(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerVisible(false);
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

  // Function to handle theme change based on selected color
  const handleThemeChange = (color) => {
    setSelectedThemeColor(color);
    setIconColor('#FFFFFF'); // Change icon color to white when theme is changed
    setIsColorPickerVisible(false); // Close the color picker modal after selecting a color
    // You can optionally save the selected color to AsyncStorage or Redux for persistence
  };

  // Dynamic styles for headers based on selected theme color
  const dynamicStyles = StyleSheet.create({
    header1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: selectedThemeColor,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    header2: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  // Theme colors array
  const themeColors = ['#65639A', '#C75051', '#68B1B4', '#547778', '#93B6B7', '#7F9FC7', '#8E7CB9', '#7B7292', '#A1CC36'];

  return (
    <>
      {/* First Header }
      <View style={dynamicStyles.header1}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <Pressable onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color={iconColor} />
          </Pressable>
          <Pressable onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={{ color: iconColor }} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </Pressable>
          <Button onPress={goToSignUp} style={[styles.signUpButton, { borderColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={goToLogin} style={[styles.loginButton, { backgroundColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Login</Text>
          </Button>
          <Pressable onPress={openColorPicker} style={styles.moreIcon}>
            <MaterialIcons name="more-vert" size={24} style={{ color: iconColor }} />
          </Pressable>
        </View>
      </View>

      {/* Second Header }
      <View style={dynamicStyles.header2}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            underlineColor="transparent"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Pressable onPress={() => console.log('Search')} style={styles.searchButton}>
            <MaterialIcons
              name="search"
              size={24}
              style={[
                styles.searchIcon,
                isSearchFocused && styles.searchIconFocused,
                { color: iconColor }
              ]}
            />
          </Pressable>
        </View>
      </View>

      {/* Color Picker Modal }
      <Modal visible={isColorPickerVisible} animationType="slide">
        <View style={styles.colorPickerModal}>
          <Text>Choose a Theme Color:</Text>
          <View style={styles.colorPickerContainer}>
            {themeColors.map((color, index) => (
              <Pressable
                key={index}
                style={[styles.colorOption, { backgroundColor: color }]}
                onPress={() => handleThemeChange(color)}
              />
            ))}
          </View>
          <Button onPress={closeColorPicker}>
            <Text>Close</Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
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
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  signUpButton: {
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  loginButton: {
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreIcon: {
    marginLeft: 10,
  },
  colorPickerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default Header;theme basic 1*/


/*login mising import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, Modal, TextInput } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState('#FFFFFF'); // Default theme color
  const [iconColor, setIconColor] = useState('#888'); // Default icon color

  const navigation = useNavigation();

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const openColorPicker = () => {
    setIsColorPickerVisible(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerVisible(false);
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

  // Function to handle theme change based on selected color
  const handleThemeChange = (color) => {
    setSelectedThemeColor(color);
    setIconColor('#FFFFFF'); // Change icon color to white when theme is changed
    setIsColorPickerVisible(false); // Close the color picker modal after selecting a color
    // You can optionally save the selected color to AsyncStorage or Redux for persistence
  };

  // Dynamic styles for headers based on selected theme color
  const dynamicStyles = StyleSheet.create({
    header1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: selectedThemeColor,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    header2: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  // Theme colors array
  const themeColors = ['#65639A', '#C75051', '#68B1B4', '#547778', '#93B6B7', '#7F9FC7', '#8E7CB9', '#7B7292', '#A1CC36'];

  return (
    <>
      {/* First Header }
      <View style={dynamicStyles.header1}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <Pressable onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color={iconColor} />
          </Pressable>
          <Pressable onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={{ color: iconColor }} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </Pressable>
          <Button onPress={goToSignUp} style={[styles.signUpButton, { borderColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={goToLogin} style={[styles.loginButton, { backgroundColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Login</Text>
          </Button>
          <Pressable onPress={goToProfile} style={styles.profileIcon}>
            <MaterialIcons name="account-circle" size={24} style={{ color: iconColor }} />
          </Pressable>
          <Pressable onPress={openColorPicker} style={styles.moreIcon}>
            <MaterialIcons name="more-vert" size={24} style={{ color: iconColor }} />
          </Pressable>
        </View>
      </View>

      {/* Second Header }
      <View style={dynamicStyles.header2}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            underlineColor="transparent"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Pressable onPress={() => console.log('Search')} style={styles.searchButton}>
            <MaterialIcons
              name="search"
              size={24}
              style={[
                styles.searchIcon,
                isSearchFocused && styles.searchIconFocused,
                { color: iconColor }
              ]}
            />
          </Pressable>
        </View>
      </View>

      {/* Color Picker Modal }
      <Modal visible={isColorPickerVisible} animationType="slide">
        <View style={styles.colorPickerModal}>
          <Text>Choose a Theme Color:</Text>
          <View style={styles.colorPickerContainer}>
            {themeColors.map((color, index) => (
              <Pressable
                key={index}
                style={[styles.colorOption, { backgroundColor: color }]}
                onPress={() => handleThemeChange(color)}
              />
            ))}
          </View>
          <Button onPress={closeColorPicker}>
            <Text>Close</Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
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
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  signUpButton: {
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  loginButton: {
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreIcon: {
    marginLeft: 10,
  },
  profileIcon: {
    marginLeft: 10,
  },
  colorPickerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default Header;login missing*/


import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, Modal, TextInput } from 'react-native';
import { Badge, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState('#FFFFFF'); // Default theme color
  const [iconColor, setIconColor] = useState('#888'); // Default icon color

  const navigation = useNavigation();

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const openColorPicker = () => {
    setIsColorPickerVisible(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerVisible(false);
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

  // Function to handle theme change based on selected color
  const handleThemeChange = (color) => {
    setSelectedThemeColor(color);
    setIconColor('#FFFFFF'); // Change icon color to white when theme is changed
    setIsColorPickerVisible(false); // Close the color picker modal after selecting a color
    // You can optionally save the selected color to AsyncStorage or Redux for persistence
  };

  // Dynamic styles for headers based on selected theme color
  const dynamicStyles = StyleSheet.create({
    header1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: selectedThemeColor,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    header2: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  // Theme colors array
  const themeColors = ['#65639A', '#C75051', '#68B1B4', '#547778', '#93B6B7', '#7F9FC7', '#8E7CB9', '#7B7292', '#A1CC36'];

  return (
    <>
      {/* First Header */}
      <View style={dynamicStyles.header1}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <Pressable onPress={goToWishlist} style={styles.wishlistButton}>
            <MaterialIcons name="favorite" size={24} color={iconColor} />
          </Pressable>
          <Pressable onPress={goToCart}>
            <MaterialIcons name="shopping-cart" size={24} style={{ color: iconColor }} />
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>3</Text>
            </Badge>
          </Pressable>
          <Button onPress={goToSignUp} style={[styles.signUpButton, { borderColor: selectedThemeColor }]}>
            <Text style={dynamicStyles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={goToLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Button>
          <Pressable onPress={goToProfile} style={styles.profileIcon}>
            <MaterialIcons name="account-circle" size={24} style={{ color: iconColor }} />
          </Pressable>
          <Pressable onPress={openColorPicker} style={styles.moreIcon}>
            <MaterialIcons name="more-vert" size={24} style={{ color: iconColor }} />
          </Pressable>
        </View>
      </View>

      {/* Second Header */}
      <View style={dynamicStyles.header2}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            underlineColor="transparent"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Pressable onPress={() => console.log('Search')} style={styles.searchButton}>
            <MaterialIcons
              name="search"
              size={24}
              style={[
                styles.searchIcon,
                isSearchFocused && styles.searchIconFocused,
                { color: iconColor }
              ]}
            />
          </Pressable>
        </View>
      </View>

      {/* Color Picker Modal */}
      <Modal visible={isColorPickerVisible} animationType="slide">
        <View style={styles.colorPickerModal}>
          <Text>Choose a Theme Color:</Text>
          <View style={styles.colorPickerContainer}>
            {themeColors.map((color, index) => (
              <Pressable
                key={index}
                style={[styles.colorOption, { backgroundColor: color }]}
                onPress={() => handleThemeChange(color)}
              />
            ))}
          </View>
          <Button onPress={closeColorPicker}>
            <Text>Close</Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
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
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  signUpButton: {
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  loginButton: {
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#0000FF', // Blue background
  },
  loginButtonText: {
    color: 'white', // White text
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreIcon: {
    marginLeft: 10,
  },
  profileIcon: {
    marginLeft: 10,
  },
  colorPickerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default Header;
