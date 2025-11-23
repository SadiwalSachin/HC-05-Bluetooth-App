import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SendPlainTextScreen() {

  const [textMessage, setTextMessage] = useState("");

  const handleSend = () => {
    // Later you will call HC05 send function here
    console.log("Sending:", textMessage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Plain Text</Text>

      <Text style={styles.label}>Type your message:</Text>

      <TextInput
        value={textMessage}
        onChangeText={setTextMessage}
        placeholder="Enter your text here..."
        placeholderTextColor="#8AA5C8"
        style={styles.textInput}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FF", // off-white bluish
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A84FF",
    marginBottom: 10,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    color: "#0A84FF",
    marginBottom: 8,
    marginTop: 10,
  },

  textInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    minHeight: 140,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#C8D6EE",
    elevation: 2,
    shadowColor: "#0A84FF20",
  },

  button: {
    marginTop: 25,
    backgroundColor: "#0A84FF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
