import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Voice from "@react-native-voice/voice";

export default function SendVoiceDataScreen() {

  console.log("Voice is",Voice);
  

  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState("");
  const [isTextReady, setIsTextReady] = useState(false);

  useEffect(() => {
    requestMicrophonePermission();

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    setIsRecording(true);
  };

  const onSpeechEnd = () => {
    setIsRecording(false);
  };

  const onSpeechResults = (e) => {
    const text = e.value?.[0] ?? "";
    setRecordedText(text);
    setIsTextReady(true);
  };

  const onSpeechError = (e) => {
    console.log("Speech error:", e);
    setIsRecording(false);
  };

  const startRecognizing = async () => {
    try {
      const hasPermission = await requestMicrophonePermission();
      if (!hasPermission) {
        Alert.alert("Permission required", "Please allow microphone access.");
        return;
      }

      setRecordedText("");
      setIsTextReady(false);
      console.log("in reco");
      
      await Voice.start('en-US');
      
    } catch (e) {
      console.error("Start error:", e);
      setIsRecording(false);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error("Stop error:", e);
    }
  };

  const requestMicrophonePermission = async () => {
    if (Platform.OS !== "android") return true;

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Microphone Permission",
          message: "This app needs microphone access.",
          buttonPositive: "OK",
        }
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handleSendVoiceData = () => {
    if (recordedText) {
      Alert.alert(`Sending: ${recordedText}`);
      // Add your backend logic here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Voice Data</Text>

      <View style={styles.recordCard}>
        <Text style={styles.statusText}>
          {isRecording ? "Recording..." : "Tap to begin"}
        </Text>

        <TouchableOpacity
          style={[styles.micBtn, isRecording && styles.micBtnActive]}
          onPress={isRecording ? stopRecognizing : startRecognizing}
        >
          <Ionicons
            name={isRecording ? "stop-circle" : "mic"}
            size={24}
            color="#fff"
          />
          <Text style={styles.micBtnText}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Text>
        </TouchableOpacity>
      </View>

      {recordedText !== "" && (
        <View style={styles.outputBox}>
          <Text style={styles.outputLabel}>Recognized Text:</Text>
          <Text style={styles.outputText}>{recordedText}</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.sendBtn, !isTextReady && styles.sendBtnDisabled]}
        disabled={!isTextReady}
        onPress={handleSendVoiceData}
      >
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
  outputBox: {
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  outputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0A84FF",
    marginBottom: 6,
  },
  outputText: {
    fontSize: 16,
    color: "#333",
  },
  sendBtn: {
    marginTop: 40,
    backgroundColor: "#0A84FF",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  sendBtnDisabled: {
    backgroundColor: "#ccc",
  },
  sendText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
