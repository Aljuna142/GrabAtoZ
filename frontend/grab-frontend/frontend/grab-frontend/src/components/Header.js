
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Badge } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const Header = ({ navigation, searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Grabatoz</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          underlineColor="transparent" 
          activeUnderlineColor="#7DDA58" 
          theme={{ colors: { primary: '#7DDA58' } }} // Changes the border color when focused
        />
        <TouchableOpacity onPress={() => console.log('Search')} style={styles.searchButton}>
          <MaterialIcons name="search" size={24} style={styles.searchIcon} />
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
    backgroundColor: '#7DDA58',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex:1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    maxWidth: screenWidth * 0.6, // Adjust the max width
  },
  searchButton: {
    backgroundColor: 'white', 
    borderRadius: 20,
    padding: 8, //
  },
  searchIcon: {
    color:"#888"
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

