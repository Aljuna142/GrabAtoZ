
// SplashScreen.js
/*okimport React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen from expo-splash-screen

const Splash = ({ navigation }) => {
  useEffect(() => {
    const hideSplash = async () => {
      try {
        await SplashScreen.hideAsync(); // Use hideAsync from expo-splash-screen
        navigation.replace('Home'); // Replace 'Home' with your main screen name
      } catch (e) {
        console.warn(e); // Handle error if hideAsync fails
      }
    };

    setTimeout(() => {
      hideSplash();
    }, 3000); // Adjust the time as per your app's loading time
  }, [navigation]); // Ensure navigation prop is included in dependency array

  return (
    <View style={styles.container}>
      {/* Replace 'logo1.png' with your actual logo or branding image path }
      <Image
        source={require('../assets/images/logo1.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Customize background color if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width and height as per your logo size
    height: 200,
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
});

export default Splash;*/




/* hid error clr import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen from expo-splash-screen

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Hide splash screen after some time (e.g., 2 seconds)
    const hideSplash = async () => {
      await SplashScreen.hideAsync(); // Use hideAsync from expo-splash-screen
      navigation.replace('Main'); // Replace 'Main' with your main screen name
    };

    // Optional: You can add additional initialization tasks here

    setTimeout(() => {
      hideSplash();
    }, 3000); // Adjust the time as per your app's loading time
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace 'logo1.png' with your actual logo or branding image path }
      <Image
        source={require('../assets/images/logo1.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Customize background color if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width and height as per your logo size
    height: 200,
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
});

export default Splash;*/




/*oldimport React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Hide splash screen after some time (e.g., 2 seconds)
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
      navigation.replace('Main'); // Replace 'Main' with your main screen name
    };

    // Optional: You can add additional initialization tasks here

    setTimeout(() => {
      hideSplash();
    }, 3000); // Adjust the time as per your app's loading time
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace 'logo1.png' with your actual logo or branding image path *}
      <Image 
      source={require('../assets/images/logo1.png')} 
      style={styles.logo} 
      resizeMode= "contain"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Customize background color if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width and height as per your logo size
    height: 200,
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
});

export default Splash;*/


// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen from expo-splash-screen

const Splash = ({ navigation }) => {
  useEffect(() => {
    const hideSplash = async () => {
      try {
        await SplashScreen.hideAsync(); // Use hideAsync from expo-splash-screen
        if (navigation) {
          navigation.replace('Home'); // Replace 'Home' with your main screen name
        }
      } catch (e) {
        console.warn(e); // Handle error if hideAsync fails
      }
    };

    setTimeout(() => {
      hideSplash();
    }, 3000); // Adjust the time as per your app's loading time
  }, [navigation]); // Ensure navigation prop is included in dependency array

  return (
    <View style={styles.container}>
      {/* Replace 'logo1.png' with your actual logo or branding image path */}
      <Image
        source={require('../assets/images/logo1.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Customize background color if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width and height as per your logo size
    height: 200,
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
});

export default Splash;
