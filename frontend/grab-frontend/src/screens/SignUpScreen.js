

/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
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

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <LinearGradient
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
      style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <View style={[styles.formContainer, isMobileScreen && styles.formContainerMobile]}>
        {/* Sign Up Form }
        <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#333' }}>SignUp</Text>
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Date of Birth (DD-MM-YYYY)"
          value={dob}
          onChangeText={setDob}
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, styles.passwordInput, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.input, styles.passwordInput, isMobileScreen && styles.inputMobile, isSearchFocused && styles.inputFocused]}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmpassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
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
    borderWidth: 0, // Remove default border
    borderBottomWidth: 1, // Only bottom border
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  inputMobile: {
    width: '100%', // Adjusted width for mobile screens
  },
  inputFocused: {
    borderBottomColor: '#758DAA', // Change border color when focused
  },
  passwordInput: {
    marginBottom: 20, // Additional margin for password fields
  },
  button: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#6D86A4',
    borderRadius: 20,
    backgroundColor: '#7992B1',
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

export default SignUpScreen; without scrolling*/



/*hidden erors import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
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
    if (username && password && confirmpassword && firstName && lastName && dob && gender && mobileNumber && email) {
      navigation.navigate('Login');
    } else {
      alert('Please enter all required details');
    }
  };

  return (
    <LinearGradient
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
      style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={[styles.formContainer, isMobileScreen && styles.formContainerMobile]}>
          <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#333' }}>SignUp</Text>
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
            style={[styles.input, styles.passwordInput, isMobileScreen && styles.inputMobile]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={[styles.input, styles.passwordInput, isMobileScreen && styles.inputMobile]}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmpassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,
    borderRadius: 10,
  },
  formContainerMobile: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  inputMobile: {
    width: '100%',
  },
  passwordInput: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#6D86A4',
    borderRadius: 20,
    backgroundColor: '#7992B1',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  buttonMobile: {
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUpScreen;*/


import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';
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
    if (username && password && confirmpassword && firstName && lastName && dob && gender && mobileNumber && email) {
      navigation.navigate('Login');
    } else {
      alert('Please enter all required details');
    }
  };

  return (
    <LinearGradient
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
      style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={[styles.formContainer, isMobileScreen && styles.formContainerMobile]}>
          <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#333' }}>SignUp</Text>
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
          <TextInput
            style={[styles.input, isMobileScreen && styles.inputMobile]}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            inputMode="phone"
          />
          <TextInput
            style={[styles.input, isMobileScreen && styles.inputMobile]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            inputMode="email"
          />
          <TextInput
            style={[styles.input, isMobileScreen && styles.inputMobile]}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={[styles.input, styles.passwordInput, isMobileScreen && styles.inputMobile]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={[styles.input, styles.passwordInput, isMobileScreen && styles.inputMobile]}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmpassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
          <Pressable style={[styles.button, isMobileScreen && styles.buttonMobile]} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Go to Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,
    borderRadius: 10,
  },
  formContainerMobile: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  inputMobile: {
    width: '100%',
  },
  passwordInput: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#6D86A4',
    borderRadius: 20,
    backgroundColor: '#7992B1',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  buttonMobile: {
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUpScreen;





