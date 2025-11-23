import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PermissionsAndroid } from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import { BluetoothContext } from '../context/BluetoothContext';

export default function BluetoothScreen() {

  const { connectedDevice, setConnectedDevice } = useContext(BluetoothContext);
  const [devices, setDevices] = useState([]);
  const [loding,setLoading] = useState(false)
  const [error,setError] = useState()

   async function listPairedDevices (){
    try {
      const paiedrDevices = await RNBluetoothClassic.getBondedDevices();
      console.log('Paired devices:', paiedrDevices);
      setDevices(paiedrDevices)
      return devices;
    } catch (error) {
      console.log('Error listing devices:', error);
    }
  };

  async function requestPermissions() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
      ]);

      console.log('Permissions:', granted);
    } catch (err) {
      console.warn(err);
    }
  }

  async function connectToDevice(device) {
    try {
      setLoading(true)
      console.log("device came to connect",device);
      
      const response = await device.connect()
      if(response){
        setConnectedDevice(device)
         console.log("Connected:", device.name);
         setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log("Connect error:", error);
      setError(error)
    }
  }

  useEffect(() => {
    requestPermissions().then(()=>{
      listPairedDevices()
    })
  }, []);

  console.log('i am on bluettoth screen');
  console.log("selected Device",connectedDevice);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connected Bluetooth Devices</Text>

      {/* <FlatList
        data={dummyDevices}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.deviceCard}>
            <Ionicons name="bluetooth" size={28} color="#0A84FF" />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.deviceName}>{item.name}</Text>
              <Text style={styles.connectedText}>Connected</Text>
            </View>

            <Ionicons name="chevron-forward" size={24} color="#888" />
          </TouchableOpacity>
        )}
      /> */}

         <FlatList
        data={devices}
        keyExtractor={(item) => item?.address}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => connectToDevice(item)}
            style={{
              padding: 15,
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 10,
            }}
          >
            <Text>{item?.name}</Text>
            <Text style={{ color: "gray" }}>{item?.address}</Text>
          </TouchableOpacity>
        )}
      />

      {connectedDevice && (
        <Text style={{ marginTop: 20, fontSize: 16, color: "green" }}>
          Connected to: {connectedDevice.name}
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginBottom: 20,
    textAlign: 'center',
  },

  deviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#0A84FF25',
  },

  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  connectedText: {
    fontSize: 12,
    color: '#0A84FF',
    marginTop: 3,
  },
});
