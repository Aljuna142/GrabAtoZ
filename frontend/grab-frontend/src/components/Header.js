   import React, { useState } from 'react';
  import { View, Image, StyleSheet, Text, Pressable, Modal, TextInput, useWindowDimensions } from 'react-native';
  import { Badge, Button } from 'native-base';
  import { MaterialIcons } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';
  
  const Header = ({ searchQuery, setSearchQuery }) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
    const [selectedThemeColor, setSelectedThemeColor] = useState('#FFFFFF'); // Default theme color
    const [iconColor, setIconColor] = useState('#888'); // Default icon color
  
    const { width } = useWindowDimensions(); // Get screen width
    const isLargeScreen = width >= 768; // Define breakpoint for large screens (e.g., 768px)
  
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
      setIsColorPickerVisible(false); // Close color picker after selection
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
        color: selectedThemeColor === '#FFFFFF' ? '#000' : '#FFFFFF', // Dynamic text color based on theme
        fontWeight: 'bold',
      },
    });
  
    // Theme colors array
    const themeColors = ['#65639A', '#C75051', '#68B1B4', '#547778', '#93B6B7', '#7F9FC7', '#8E7CB9', '#7B7292','#D20103', '#A1CC36'];
  
    return (
      <>
        {isLargeScreen ? (
          // Single header for large screens
          <View style={dynamicStyles.header1}>
            <Image
              source={require('../assets/images/logo.jpg')}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={[styles.searchContainer, styles.largeScreenSearchContainer]}>
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
                    { color: '#888' } // Fixed search icon color
                  ]}
                />
              </Pressable>
            </View>
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
              <Button onPress={goToSignUp} style={[styles.signUpButton, { backgroundColor: selectedThemeColor }]}>
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
        ) : (
          // Double header for small screens
          <>
            {/* First Header*/}
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
                <Button onPress={goToSignUp} style={[styles.signUpButton, { backgroundColor: selectedThemeColor }]}>
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
            {/* Second Header*/}
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
                      { color: '#888' } // Fixed search icon color
                    ]}
                  />
                </Pressable>
              </View>
            </View>
          </>
        )}
        {/* Color Picker Modal*/}
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
          </View>
        </Modal>
      </>
    );
  };
  
  
    const styles = StyleSheet.create({
      logo: {
        width: 120, // Adjust as needed
        height: 40, // Adjust as needed
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
      },
      largeScreenSearchContainer: {
        flex: 0.6, // Adjust the width of the search container for large screens
      },
      searchInput: {
        flex: 1,
        
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#000', // Example text color for search input
      },
      searchButton: {
        padding: 10,
      },
      searchIcon: {
        marginRight: 10,
        color: '#888', // Default color for search icon
      },
      searchIconFocused: {
        color: '#000', // Example of focused search icon color
      },
      rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      wishlistButton: {
        marginRight: 10,
      },
      badge: {
        backgroundColor: 'red', // Example badge background color
        position: 'absolute',
        top: 0,
        right: 0,
      },
      signUpButton: {
        marginHorizontal: 5,
        backgroundColor: 'transparent', // Transparent background for Sign Up button when theme changes
        borderWidth: 0,
        borderRadius: 5,
        paddingHorizontal: 4,//fit in screen size
      },
      loginButton: {
        marginHorizontal: 5,
        backgroundColor: 'transparent', // Transparent background for Login button when theme changes
        borderWidth: 0,
        borderRadius: 5,
        paddingHorizontal: 4,//fir in screen size
      },
      loginButtonText: {
        color: '#4287f5', // Text color for Login and Sign Up buttons
        fontWeight: 'bold',
      },
      profileIcon: {
        marginLeft: 0,
      },
      moreIcon: {
        marginRight:10,
        //marginLeft: 5,
      },
      colorPickerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      colorPickerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
      colorOption: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 5,
      },
    });
  
    export default Header;





    
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

export default Header;finalllllllllll old */



/*

import React from react;
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {icons,Materialsicon} from React-native;
import {MaterialCommunity Icons ,vectoricons ,stylesheet,communityIcons} from native-base;
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAWesome } from ''@expo/vector-icons;


import {materials,icons} from 'react-redux';

const screenwidth= dimensions.api{width};
const screenheight= dimensions.api{height};
const styles= StyleSheet.create();
const Header= props=> {
  currentItem.indexItem===0|convertItem===1
  if(currentItem>convertitem){
  current.Index.Item.Section {
{
  backgroundColor: '#0B086B,
  font-Family: 'Robotic',
  color: 'white',
  fontWeight: 'bold',
  fontSize:20,
  padding:10;
  borderRadius:20;
  margin:10;

  }

  const ProductItem>productId===1{
  <Pressable>
  <button on pressable={go to login}>
  </button>}
  
  </Pressable>
 <View>
 <Text>Brands Section</Text>
 <Text>CategoriesItem</Text>
 <Text>BrandsItem</Text>
 <Text>CategoriesItem</Text>
 <Text>BrandsItem</Text>
</View>



Button.text: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },

  Button.txt: {
    backgroundColor: '#0B086B',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
   buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  badgeText: {
  position: 'absolute',
  top:5,
  right:10,
  color:'white',
  fontweight:'bold'








  
   }
  






  























 }



  
  
  
  }}}

*/