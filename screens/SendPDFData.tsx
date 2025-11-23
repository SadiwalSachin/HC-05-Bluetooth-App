import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SendPDFScreen() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send PDF File</Text>

      <View style={styles.card}>
        <Ionicons name="document-text-outline" size={60} color="#0A84FF" />

        <Text style={styles.infoText}>
          {selectedPDF ? selectedPDF : "No PDF Selected"}
        </Text>

        <TouchableOpacity style={styles.uploadBtn}>
          <MaterialIcons name="upload-file" size={22} color="#fff" />
          <Text style={styles.uploadText}>Choose PDF</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>Send PDF</Text>
      </TouchableOpacity>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A84FF",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 25,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#0A84FF30",
  },

  infoText: {
    marginTop: 15,
    fontSize: 16,
    color: "#555",
  },

  uploadBtn: {
    marginTop: 20,
    backgroundColor: "#0A84FF",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  uploadText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
    fontSize: 16,
  },

  sendBtn: {
    marginTop: 40,
    backgroundColor: "#0A84FF",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },

  sendText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
