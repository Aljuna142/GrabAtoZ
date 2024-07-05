
//UserDetailsscreen.js

/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const UserDetailsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState(''); // State for selected country

  const handlePlaceOrder = () => {
    // Handle placing the order
    // You can pass the user details to the next screen or send them to the backend here
    alert('Order placed successfully!');
    navigation.navigate('Payment'); // Navigate to the payment screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="House/Building Number"
        value={houseNumber}
        onChangeText={setHouseNumber}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Area"
        value={area}
        onChangeText={setArea}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code (Optional)"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="number-pad"
      />
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Country" value="" />
        <Picker.Item label="UAE" value="UAE" />
        <Picker.Item label="Iran" value="Iran" />
        {/* Add more countries as needed }
      </Picker>
      <Button
        title="Place Order"
        onPress={handlePlaceOrder}
        color="#00AA00" // Green color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default UserDetailsScreen;place order*/ 



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const UserDetailsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState(''); // State for selected country

  const handleContinue = () => {
    // Handle continuing to the next screen or performing necessary validations
    // Example validation: Ensure required fields are filled before continuing
    if (!name || !mobileNumber || !houseNumber || !street || !area || !city || !state || !country) {
      alert('Please fill in all required fields.');
      return;
    }

    // Proceed to the next screen or action
    navigation.navigate('Payment'); // Navigate to the payment screen or next step
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="House/Building Number"
        value={houseNumber}
        onChangeText={setHouseNumber}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Area"
        value={area}
        onChangeText={setArea}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code (Optional)"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="number-pad"
      />
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Country" value="" />
        <Picker.Item label="UAE" value="UAE" />
        <Picker.Item label="Iran" value="Iran" />
        {/* Add more countries as needed*/ }
      </Picker>
      <Button
        title="Continue"
        onPress={handleContinue}
        color="#00AA00" // Green color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default UserDetailsScreen;
