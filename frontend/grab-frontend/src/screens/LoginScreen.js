// src/screens/LoginScreen.js


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login logic
    if (username && password) {
      // Simulate successful login and navigate to Home screen
      navigation.navigate('Home');
    } else {
      // Show error message
      alert('Please enter valid login details');
    }
  };

  return (
    <LinearGradient
      colors={['#93C65C', '#44B318']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Go to Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#44B318',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: '#FD9B07',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;


