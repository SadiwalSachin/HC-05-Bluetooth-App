import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SendVoiceDataScreen() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Voice Data</Text>

      <View style={styles.recordCard}>
        <Ionicons
          name={isRecording ? "mic" : "mic-outline"}
          size={70}
          color={isRecording ? "#FF3B30" : "#0A84FF"}
        />

        <Text style={styles.statusText}>
          {isRecording ? "Recording..." : "Tap the mic to record"}
        </Text>

        <TouchableOpacity
          style={[styles.micBtn, isRecording && styles.micBtnActive]}
        >
          <Ionicons
            name="radio-button-on-outline"
            size={30}
            color="#fff"
          />
          <Text style={styles.micBtnText}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>Send Voice Data</Text>
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

  recordCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#0A84FF30",
  },

  statusText: {
    fontSize: 16,
    color: "#444",
    marginTop: 12,
    marginBottom: 22,
  },

  micBtn: {
    backgroundColor: "#0A84FF",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  micBtnActive: {
    backgroundColor: "#FF3B30",
  },

  micBtnText: {
    color: "#fff",
    marginLeft: 10,
    fontWeight: "600",
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
