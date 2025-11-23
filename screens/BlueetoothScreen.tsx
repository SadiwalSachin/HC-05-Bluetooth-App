import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const dummyDevices = [
  { id: "1", name: "HC-05 A1:BC:23" },
  { id: "2", name: "HC-05 Speaker" },
  { id: "3", name: "ESP32 Controller" },
];

export default function BluetoothScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connected Bluetooth Devices</Text>

      <FlatList
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FF",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A84FF",
    marginBottom: 20,
    textAlign: "center",
  },

  deviceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 3,
    shadowColor: "#0A84FF25",
  },

  deviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  connectedText: {
    fontSize: 12,
    color: "#0A84FF",
    marginTop: 3,
  },
});
