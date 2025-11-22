// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

/**
 * Bluetooth HC-05 App
 * @format
 */

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   useColorScheme,
//   Animated,
// } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [isConnected, setIsConnected] = useState(false);
//   const [buttonScale] = useState(new Animated.Value(1));

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
//     flex: 1,
//   };

//   const handleConnect = () => {
//     Animated.sequence([
//       Animated.timing(buttonScale, {
//         toValue: 0.95,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(buttonScale, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     setIsConnected(!isConnected);
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={styles.container}>
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={[styles.title, isDarkMode && styles.titleDark]}>
//               Sachin Sadiwal
//             </Text>
//             <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
//               Device Controller
//             </Text>
//           </View>

//           {/* Bluetooth Icon */}
//           <View style={styles.iconContainer}>
//             <View
//               style={[
//                 styles.bluetoothIcon,
//                 isConnected && styles.bluetoothIconConnected,
//               ]}>
//               <Text style={styles.bluetoothSymbol}>⚡</Text>
//             </View>
//             <View
//               style={[
//                 styles.statusIndicator,
//                 isConnected && styles.statusIndicatorConnected,
//               ]}
//             />
//           </View>

//           {/* Status */}
//           <View style={styles.statusContainer}>
//             <Text style={[styles.statusText, isDarkMode && styles.statusTextDark]}>
//               Status: {isConnected ? 'Connected' : 'Disconnected'}
//             </Text>
//           </View>

//           {/* Connect Button */}
//           <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
//             <TouchableOpacity
//               style={[
//                 styles.connectButton,
//                 isConnected && styles.connectButtonActive,
//               ]}
//               onPress={handleConnect}
//               activeOpacity={0.8}>
//               <Text style={styles.connectButtonText}>
//                 {isConnected ? 'Disconnect' : 'Connect Device'}
//               </Text>
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Control Panel */}
//           {isConnected && (
//             <View style={styles.controlPanel}>
//               <Text
//                 style={[
//                   styles.controlTitle,
//                   isDarkMode && styles.controlTitleDark,
//                 ]}>
//                 Control Panel
//               </Text>

//               <View style={styles.buttonGrid}>
//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button1]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>LED ON</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button2]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>LED OFF</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button3]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>MOTOR ON</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button4]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>MOTOR OFF</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}

//           {/* Info Card */}
//           <View
//             style={[
//               styles.infoCard,
//               isDarkMode && styles.infoCardDark,
//             ]}>
//             <Text style={[styles.infoTitle, isDarkMode && styles.infoTitleDark]}>
//               ℹ️ Quick Info
//             </Text>
//             <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
//               • Tap "Connect Device" to pair with HC-05
//             </Text>
//             <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
//               • Default PIN: 1234 or 0000
//             </Text>
//             <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
//               • Baud Rate: 9600
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 40,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 8,
//   },
//   titleDark: {
//     color: '#ecf0f1',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#7f8c8d',
//     fontWeight: '500',
//   },
//   subtitleDark: {
//     color: '#bdc3c7',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//     position: 'relative',
//   },
//   bluetoothIcon: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#95a5a6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   bluetoothIconConnected: {
//     backgroundColor: '#3498db',
//   },
//   bluetoothSymbol: {
//     fontSize: 60,
//     color: '#fff',
//   },
//   statusIndicator: {
//     position: 'absolute',
//     bottom: 10,
//     right: '35%',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#e74c3c',
//     borderWidth: 3,
//     borderColor: '#fff',
//   },
//   statusIndicatorConnected: {
//     backgroundColor: '#2ecc71',
//   },
//   statusContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   statusText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#34495e',
//   },
//   statusTextDark: {
//     color: '#ecf0f1',
//   },
//   connectButton: {
//     backgroundColor: '#3498db',
//     paddingVertical: 16,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginBottom: 30,
//     shadowColor: '#3498db',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   connectButtonActive: {
//     backgroundColor: '#e74c3c',
//     shadowColor: '#e74c3c',
//   },
//   connectButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     letterSpacing: 0.5,
//   },
//   controlPanel: {
//     marginBottom: 30,
//   },
//   controlTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   controlTitleDark: {
//     color: '#ecf0f1',
//   },
//   buttonGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   controlButton: {
//     width: '48%',
//     paddingVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   button1: {
//     backgroundColor: '#2ecc71',
//   },
//   button2: {
//     backgroundColor: '#e74c3c',
//   },
//   button3: {
//     backgroundColor: '#9b59b6',
//   },
//   button4: {
//     backgroundColor: '#e67e22',
//   },
//   controlButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   infoCard: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   infoCardDark: {
//     backgroundColor: '#16213e',
//   },
//   infoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 12,
//   },
//   infoTitleDark: {
//     color: '#ecf0f1',
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#7f8c8d',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
//   infoTextDark: {
//     color: '#bdc3c7',
//   },
// });

// export default App;

/**
 * Bluetooth HC-05 App
 * @format
 */

// import React, { useState, useEffect } from 'react';


// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   useColorScheme,
//   Animated,
//   Alert,
//   PermissionsAndroid,
//   Platform,
//   ActivityIndicator,
//   FlatList,
// } from 'react-native';
// import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [isConnected, setIsConnected] = useState(false);
//   const [buttonScale] = useState(new Animated.Value(1));

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
//     flex: 1,
//   };

//   const handleConnect = () => {
//     Animated.sequence([
//       Animated.timing(buttonScale, {
//         toValue: 0.95,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(buttonScale, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     setIsConnected(!isConnected);
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={styles.container}>
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={[styles.title, isDarkMode && styles.titleDark]}>
//               Bluetooth HC-05
//             </Text>
//             <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
//               Device Controller
//             </Text>
//           </View>

//           {/* Bluetooth Icon */}
//           <View style={styles.iconContainer}>
//             <View
//               style={[
//                 styles.bluetoothIcon,
//                 isConnected && styles.bluetoothIconConnected,
//               ]}>
//               <Text style={styles.bluetoothSymbol}>⚡</Text>
//             </View>
//             <View
//               style={[
//                 styles.statusIndicator,
//                 isConnected && styles.statusIndicatorConnected,
//               ]}
//             />
//           </View>

//           {/* Status */}
//           <View style={styles.statusContainer}>
//             <Text style={[styles.statusText, isDarkMode && styles.statusTextDark]}>
//               Status: {isConnected ? 'Connected' : 'Disconnected'}
//             </Text>
//           </View>

//           {/* Connect Button */}
//           <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
//             <TouchableOpacity
//               style={[
//                 styles.connectButton,
//                 isConnected && styles.connectButtonActive,
//               ]}
//               onPress={handleConnect}
//               activeOpacity={0.8}>
//               <Text style={styles.connectButtonText}>
//                 {isConnected ? 'Disconnect' : 'Connect Device'}
//               </Text>
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Control Panel */}
//           {isConnected && (
//             <View style={styles.controlPanel}>
//               <Text
//                 style={[
//                   styles.controlTitle,
//                   isDarkMode && styles.controlTitleDark,
//                 ]}>
//                 Control Panel
//               </Text>

//               <View style={styles.buttonGrid}>
//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button1]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>LED ON</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button2]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>LED OFF</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button3]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>MOTOR ON</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.controlButton, styles.button4]}
//                   activeOpacity={0.7}>
//                   <Text style={styles.controlButtonText}>MOTOR OFF</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}

//           {/* Info Card */}
//           <View
//             style={[
//               styles.infoCard,
//               isDarkMode && styles.infoCardDark,
//             ]}>
//             <Text style={[styles.infoTitle, isDarkMode && styles.infoTitleDark]}>
//               ℹ️ Quick Info
//             </Text>
//             <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
//               • Tap "Connect Device" to pair with HC-05
//             </Text>
//             <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
//               • Default PIN: 1234 or 0000
//             </Text>
//             <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
//               • Baud Rate: 9600
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 40,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 8,
//   },
//   titleDark: {
//     color: '#ecf0f1',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#7f8c8d',
//     fontWeight: '500',
//   },
//   subtitleDark: {
//     color: '#bdc3c7',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//     position: 'relative',
//   },
//   bluetoothIcon: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#95a5a6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   bluetoothIconConnected: {
//     backgroundColor: '#3498db',
//   },
//   bluetoothSymbol: {
//     fontSize: 60,
//     color: '#fff',
//   },
//   statusIndicator: {
//     position: 'absolute',
//     bottom: 10,
//     right: '35%',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#e74c3c',
//     borderWidth: 3,
//     borderColor: '#fff',
//   },
//   statusIndicatorConnected: {
//     backgroundColor: '#2ecc71',
//   },
//   statusContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   statusText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#34495e',
//   },
//   statusTextDark: {
//     color: '#ecf0f1',
//   },
//   connectButton: {
//     backgroundColor: '#3498db',
//     paddingVertical: 16,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginBottom: 30,
//     shadowColor: '#3498db',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   connectButtonActive: {
//     backgroundColor: '#e74c3c',
//     shadowColor: '#e74c3c',
//   },
//   connectButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     letterSpacing: 0.5,
//   },
//   controlPanel: {
//     marginBottom: 30,
//   },
//   controlTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   controlTitleDark: {
//     color: '#ecf0f1',
//   },
//   buttonGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   controlButton: {
//     width: '48%',
//     paddingVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   button1: {
//     backgroundColor: '#2ecc71',
//   },
//   button2: {
//     backgroundColor: '#e74c3c',
//   },
//   button3: {
//     backgroundColor: '#9b59b6',
//   },
//   button4: {
//     backgroundColor: '#e67e22',
//   },
//   controlButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   infoCard: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   infoCardDark: {
//     backgroundColor: '#16213e',
//   },
//   infoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 12,
//   },
//   infoTitleDark: {
//     color: '#ecf0f1',
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#7f8c8d',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
//   infoTextDark: {
//     color: '#bdc3c7',
//   },
// });

// export default App;


/**
 * Bluetooth HC-05 App
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  Animated,
  Alert,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isConnected, setIsConnected] = useState(false);
  const [buttonScale] = useState(new Animated.Value(1));
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<BluetoothDevice | null>(null);
  const [scanning, setScanning] = useState(false);
  const [showDeviceList, setShowDeviceList] = useState(false);

  useEffect(() => {
    checkBluetoothEnabled();
    requestPermissions();
  }, []);

  const checkBluetoothEnabled = async () => {
    try {
      const enabled = await RNBluetoothClassic.isBluetoothEnabled();
      if (!enabled) {
        Alert.alert(
          'Bluetooth Disabled',
          'Please enable Bluetooth to use this app',
          [
            {
              text: 'Enable',
              onPress: () => RNBluetoothClassic.requestBluetoothEnabled(),
            },
            { text: 'Cancel' },
          ]
        );
      }
    } catch (error) {
      console.error('Bluetooth check error:', error);
    }
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        if (Platform.Version >= 31) {
          // Android 12 and above
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ]);
          
          const allGranted = Object.values(granted).every(
            status => status === PermissionsAndroid.RESULTS.GRANTED
          );
          
          if (!allGranted) {
            Alert.alert('Permissions Required', 'Please grant all permissions to use Bluetooth');
          }
        } else {
          // Android 11 and below
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Permission Required', 'Location permission is required for Bluetooth');
          }
        }
      } catch (error) {
        console.error('Permission error:', error);
      }
    }
  };

  const scanDevices = async () => {
    try {
      setScanning(true);
      setShowDeviceList(true);
      
      // Get only bonded (paired) devices from phone's Bluetooth settings
      const bondedDevices = await RNBluetoothClassic.getBondedDevices();
      
      setDevices(bondedDevices);
      setScanning(false);
    } catch (error) {
      setScanning(false);
      Alert.alert('Scan Error', 'Failed to get paired devices: ' + error);
      console.error('Scan error:', error);
    }
  };

  const connectToDevice = async (device: BluetoothDevice) => {
    try {
      Animated.sequence([
        Animated.timing(buttonScale, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(buttonScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      const connected = await device.connect({
        connectorType: 'rfcomm',
        DELIMITER: '\n',
      });

      if (connected) {
        setConnectedDevice(device);
        setIsConnected(true);
        setShowDeviceList(false);
        Alert.alert('Success', `Connected to ${device.name || device.address}`);
      }
    } catch (error) {
      Alert.alert('Connection Error', 'Failed to connect: ' + error);
      console.error('Connection error:', error);
    }
  };

  const disconnectDevice = async () => {
    try {
      if (connectedDevice) {
        await connectedDevice.disconnect();
        setConnectedDevice(null);
        setIsConnected(false);
        Alert.alert('Disconnected', 'Device disconnected successfully');
      }
    } catch (error) {
      Alert.alert('Disconnect Error', 'Failed to disconnect: ' + error);
      console.error('Disconnect error:', error);
    }
  };

  const sendData = async (data: string) => {
    try {
      if (connectedDevice && isConnected) {
        await connectedDevice.write(data);
        console.log('Data sent:', data);
      } else {
        Alert.alert('Not Connected', 'Please connect to a device first');
      }
    } catch (error) {
      Alert.alert('Send Error', 'Failed to send data: ' + error);
      console.error('Send error:', error);
    }
  };

  const handleConnect = () => {
    if (isConnected) {
      disconnectDevice();
    } else {
      scanDevices();
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
    flex: 1,
  };

  const renderDeviceItem = ({ item }: { item: BluetoothDevice }) => (
    <TouchableOpacity
      style={[styles.deviceItem, isDarkMode && styles.deviceItemDark]}
      onPress={() => connectToDevice(item)}
      activeOpacity={0.7}>
      <View style={styles.deviceInfo}>
        <Text style={[styles.deviceName, isDarkMode && styles.deviceNameDark]}>
          {item.name || 'Unknown Device'}
        </Text>
        <Text style={[styles.deviceAddress, isDarkMode && styles.deviceAddressDark]}>
          {item.address}
        </Text>
      </View>
      <Text style={styles.connectIcon}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, isDarkMode && styles.titleDark]}>
              Bluetooth HC-05
            </Text>
            <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
              Device Controller
            </Text>
          </View>

          {/* Bluetooth Icon */}
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.bluetoothIcon,
                isConnected && styles.bluetoothIconConnected,
              ]}>
              <Text style={styles.bluetoothSymbol}>⚡</Text>
            </View>
            <View
              style={[
                styles.statusIndicator,
                isConnected && styles.statusIndicatorConnected,
              ]}
            />
          </View>

          {/* Status */}
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, isDarkMode && styles.statusTextDark]}>
              Status: {isConnected ? 'Connected' : 'Disconnected'}
            </Text>
            {isConnected && connectedDevice && (
              <Text style={[styles.deviceLabel, isDarkMode && styles.deviceLabelDark]}>
                Device: {connectedDevice.name || connectedDevice.address}
              </Text>
            )}
          </View>

          {/* Connect Button */}
          <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
            <TouchableOpacity
              style={[
                styles.connectButton,
                isConnected && styles.connectButtonActive,
              ]}
              onPress={handleConnect}
              activeOpacity={0.8}>
              <Text style={styles.connectButtonText}>
                {isConnected ? 'Disconnect' : 'Scan & Connect'}
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Device List */}
          {showDeviceList && !isConnected && (
            <View style={[styles.deviceListContainer, isDarkMode && styles.deviceListContainerDark]}>
              <View style={styles.deviceListHeader}>
                <Text style={[styles.deviceListTitle, isDarkMode && styles.deviceListTitleDark]}>
                  Available Devices
                </Text>
                {scanning && <ActivityIndicator color="#3498db" />}
              </View>
              {devices.length > 0 ? (
                <FlatList
                  data={devices}
                  keyExtractor={(item) => item.address}
                  renderItem={renderDeviceItem}
                  style={styles.deviceList}
                />
              ) : (
                <Text style={[styles.noDevicesText, isDarkMode && styles.noDevicesTextDark]}>
                  {scanning ? 'Loading...' : 'No paired devices found. Pair devices in Bluetooth settings first.'}
                </Text>
              )}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowDeviceList(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Control Panel */}
          {isConnected && (
            <View style={styles.controlPanel}>
              <Text
                style={[
                  styles.controlTitle,
                  isDarkMode && styles.controlTitleDark,
                ]}>
                Control Panel
              </Text>

              <View style={styles.buttonGrid}>
                <TouchableOpacity
                  style={[styles.controlButton, styles.button1]}
                  activeOpacity={0.7}
                  onPress={() => sendData('LED_ON')}>
                  <Text style={styles.controlButtonText}>LED ON</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.controlButton, styles.button2]}
                  activeOpacity={0.7}
                  onPress={() => sendData('LED_OFF')}>
                  <Text style={styles.controlButtonText}>LED OFF</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.controlButton, styles.button3]}
                  activeOpacity={0.7}
                  onPress={() => sendData('MOTOR_ON')}>
                  <Text style={styles.controlButtonText}>MOTOR ON</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.controlButton, styles.button4]}
                  activeOpacity={0.7}
                  onPress={() => sendData('MOTOR_OFF')}>
                  <Text style={styles.controlButtonText}>MOTOR OFF</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Info Card */}
          <View
            style={[
              styles.infoCard,
              isDarkMode && styles.infoCardDark,
            ]}>
            <Text style={[styles.infoTitle, isDarkMode && styles.infoTitleDark]}>
              ℹ️ Quick Info
            </Text>
            <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
              • Tap "Scan & Connect" to find devices
            </Text>
            <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
              • Pair HC-05 in phone settings first
            </Text>
            <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
              • Default PIN: 1234 or 0000
            </Text>
            <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
              • Baud Rate: 9600
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  titleDark: {
    color: '#ecf0f1',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  subtitleDark: {
    color: '#bdc3c7',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  bluetoothIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#95a5a6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bluetoothIconConnected: {
    backgroundColor: '#3498db',
  },
  bluetoothSymbol: {
    fontSize: 60,
    color: '#fff',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 10,
    right: '35%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e74c3c',
    borderWidth: 3,
    borderColor: '#fff',
  },
  statusIndicatorConnected: {
    backgroundColor: '#2ecc71',
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
  },
  statusTextDark: {
    color: '#ecf0f1',
  },
  deviceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7f8c8d',
    marginTop: 8,
  },
  deviceLabelDark: {
    color: '#95a5a6',
  },
  connectButton: {
    backgroundColor: '#3498db',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#3498db',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  connectButtonActive: {
    backgroundColor: '#e74c3c',
    shadowColor: '#e74c3c',
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  controlPanel: {
    marginBottom: 30,
  },
  controlTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  controlTitleDark: {
    color: '#ecf0f1',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  controlButton: {
    width: '48%',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  button1: {
    backgroundColor: '#2ecc71',
  },
  button2: {
    backgroundColor: '#e74c3c',
  },
  button3: {
    backgroundColor: '#9b59b6',
  },
  button4: {
    backgroundColor: '#e67e22',
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoCardDark: {
    backgroundColor: '#16213e',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  infoTitleDark: {
    color: '#ecf0f1',
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
    lineHeight: 20,
  },
  infoTextDark: {
    color: '#bdc3c7',
  },
  deviceListContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    maxHeight: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  deviceListContainerDark: {
    backgroundColor: '#16213e',
  },
  deviceListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  deviceListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  deviceListTitleDark: {
    color: '#ecf0f1',
  },
  deviceList: {
    maxHeight: 250,
  },
  deviceItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviceItemDark: {
    backgroundColor: '#1a1a2e',
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  deviceNameDark: {
    color: '#ecf0f1',
  },
  deviceAddress: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  deviceAddressDark: {
    color: '#95a5a6',
  },
  connectIcon: {
    fontSize: 24,
    color: '#3498db',
    fontWeight: 'bold',
  },
  noDevicesText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 14,
    paddingVertical: 20,
  },
  noDevicesTextDark: {
    color: '#95a5a6',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;