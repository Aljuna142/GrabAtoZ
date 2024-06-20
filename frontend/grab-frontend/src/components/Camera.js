// Camera.js 


// Camera.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

const CameraComponent = ({ onClose }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialIcons name="flip-camera-ios" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                console.log('photo', photo);
                onClose();
              }
            }}
          >
            <MaterialIcons name="camera" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={onClose}
          >
            <MaterialIcons name="close" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;


/*import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

const CameraComponent = ({ onClose }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No Access to Camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialIcons name="flip-camera-ios" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                console.log('photo', photo);
                onClose();
              }
            }}
          >
            <MaterialIcons name="camera" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={onClose}
          >
            <MaterialIcons name="close" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;*/
