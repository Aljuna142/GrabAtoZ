
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const isMobileScreen = screenWidth <= 600; // Adjust the width threshold as needed

function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Mock sign-up logic
    if (username && password && confirmpassword && firstName && lastName && dob && gender && mobileNumber && email) {
      // Simulate successful sign-up and navigate to Login screen
      navigation.navigate('Login');
    } else {
      // Show error message
      alert('Please enter all required details');
    }
  };

  return (
    <LinearGradient
      colors={['#93C65C', '#93C65C', '#93C65C']}
      style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <View style={[styles.formContainer, isMobileScreen && styles.formContainerMobile]}>
        {/* Sign Up Form */}
        <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#333' }}>Sign Up</Text>
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Date of Birth (DD-MM-YYYY)"
          value={dob}
          onChangeText={setDob}
        />
        <Picker
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile]}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmpassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)', 
    padding: 20, 
    borderRadius: 10
  },
  formContainerMobile: {
    width: '80%', // Adjusted width for mobile screens
    alignSelf: 'center'
  },
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  inputMobile: {
    width: '100%', // Adjusted width for mobile screens
  },
  button: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#93C65C',
    borderRadius: 20,
    backgroundColor: '#FD9B07',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%', // Default width for mobile screens
  },
  buttonMobile: {
    width: '100%', // Adjusted width for mobile screens
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUpScreen;


