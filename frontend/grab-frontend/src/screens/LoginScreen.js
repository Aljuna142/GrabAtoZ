// src/screens/LoginScreen.js


/*import React, { useState } from 'react';
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
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
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
          <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: 'rgba(225,225,225,0.8)',
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
    backgroundColor: '#596F8B',
    //width: '100%',
    paddingHorizontal:40,
    alignItems: 'center',
    justifyContent:'flex-start',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    borderColor:'#596F8B',
    borderWidth:1,
    backgroundColor: 'White',
    paddingHorizontal:40,
    //width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily:'system',
  },
});

export default LoginScreen;*/



/*import React, { useState } from 'react';
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
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
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
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    backgroundColor: 'white',
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
    backgroundColor: '#596F8B',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    borderColor: '#596F8B',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
  signUpButtonText: {
    color: '#596F8B',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
});

export default LoginScreen;*/


/*import React, { useState } from 'react';
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
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
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
          style={[styles.input, styles.passwordInput]}
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
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    backgroundColor: 'white',
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
    borderBottomWidth: 2,
    borderColor: '#596F8B',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  loginButton: {
    backgroundColor: '#596F8B',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    borderColor: '#596F8B',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
  signUpButtonText: {
    color: '#596F8B',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
});

export default LoginScreen;*/

/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={[styles.inputContainer, isSearchFocused && styles.inputContainerFocused]}>
          <TextInput
            style={[styles.input, isSearchFocused && styles.inputFocused]}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
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
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    backgroundColor: '#fff',
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
  inputContainer: {
    width: '100%',
    borderBottomWidth: 2,  // Default border style
    borderBottomColor: '#596F8B',  // Default bottom border color
    marginBottom: 15,
  },
  inputContainerFocused: {
    borderBottomWidth: 2,  // Increase border width when focused
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  inputFocused: {
  
    borderBottomColor: '#596F8B',  // Change bottom border color when focused
  },
  loginButton: {
    borderColor: '#596F8B',
    backgroundColor: '#596F8B',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    borderColor: '#596F8B',
    //borderWidth: 1,
    backgroundColor: '#596F8B',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
});

export default LoginScreen; single line border*/


/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={[styles.inputContainer, isSearchFocused && styles.inputContainerFocused]}>
          <TextInput
            style={[styles.input, isSearchFocused && styles.inputFocused]}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => console.log('Forgot Password pressed')} // Placeholder action
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttonContainer}>
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#fff',
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
  inputContainer: {
    width: '100%',
    borderBottomWidth: 2,  // Default border style
    borderBottomColor: '#596F8B',  // Default bottom border color
    marginBottom: 15,
  },
  inputContainerFocused: {
    borderBottomWidth: 2,  // Increase border width when focused
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  inputFocused: {
    borderBottomColor: '#596F8B',  // Change bottom border color when focused
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#596F8B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#596F8B',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    width: '45%',  // Adjust width as per your design
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#596F8B',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    width: '45%',  // Adjust width as per your design
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'system',
  },
});

export default LoginScreen;*/



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
      colors={['#758DAA', '#6D86A4', '#8BA3C0']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={[styles.inputContainer, isSearchFocused && styles.inputContainerFocused]}>
          <TextInput
            style={[styles.input, isSearchFocused && styles.inputFocused]}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => console.log('Forgot Password pressed')} // Placeholder action
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#fff',
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
  inputContainer: {
    width: '100%',
    borderBottomWidth: 2,  // Default border style
    borderBottomColor: '#596F8B',  // Default bottom border color
    marginBottom: 15,
  },
  inputContainerFocused: {
    borderBottomWidth: 2,  // Increase border width when focused
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  inputFocused: {
    borderBottomColor: '#596F8B',  // Change bottom border color when focused
  },
  forgotPassword: {
    alignSelf: 'flex-end', // Adjust alignment as needed
    marginTop: 10,  // Adjust spacing from password input
  },
  forgotPasswordText: {
    color: '#596F8B',
    fontSize: 12,  // Adjust font size for smaller text
    textDecorationLine: 'underline',  // Underline style for link
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#596F8B',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    width: '45%',  // Adjust width as per your design
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#596F8B',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    width: '45%',  // Adjust width as per your design
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});

export default LoginScreen;







