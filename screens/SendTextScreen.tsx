import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import { BluetoothContext } from '../context/BluetoothContext';

export default function SendPlainTextScreen() {
  const { connectedDevice } = useContext(BluetoothContext);
  const [textMessage, setTextMessage] = useState('');
  const [messages, setMessages] = useState([]); // chat UI messages

  const flatListRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // 🔵 Listen to incoming data from Arduino
  useEffect(() => {
    if (!connectedDevice) return;

    const subscription = connectedDevice.onDataReceived(event => {
      console.log('Received:', event.data);

      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), type: 'received', text: event.data },
      ]);
    });

    return () => subscription.remove();
  }, [connectedDevice]);

  // 🔵 Send data to Arduino
  const handleSend = async () => {
    try {
      if (!connectedDevice) {
        Alert.alert('No device connected');
        return;
      }
      if (!textMessage.trim()) return;

      await connectedDevice.write(textMessage + '\n');

      console.log('Sent:', textMessage);

      // Add message to UI
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), type: 'sent', text: textMessage },
      ]);

      setTextMessage(''); // clear input
    } catch (error) {
      console.log('Sending failed:', error);
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.msgBubble,
        item.type === 'sent' ? styles.sentBubble : styles.receivedBubble,
      ]}
    >
      <Text
        style={[
          styles.msgText,
          item.type === 'sent' ? styles.sentText : styles.receivedText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>
        Connected to: {connectedDevice?.name || 'No Device'}
      </Text>

      {/* Chat Area */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input */}
      <TextInput
        value={textMessage}
        onChangeText={setTextMessage}
        placeholder="Type message..."
        placeholderTextColor="#8AA5C8"
        style={styles.textInput}
      />

      {/* Send Button */}
      <TouchableOpacity
        disabled={!connectedDevice} // disable when NO device connected
        style={[
          styles.button,
          !connectedDevice && { backgroundColor: '#9BB9E8' }, // faded color when disabled
        ]}
        onPress={handleSend}
      >
        <Text style={styles.btnText}>
          {connectedDevice ? 'Send' : 'Connect Device First'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ==================== STYLES ====================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A84FF',
    textAlign: 'center',
    marginBottom: 5,
  },

  subTitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 14,
  },

  chatContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },

  msgBubble: {
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    maxWidth: '80%',
  },

  sentBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#0A84FF',
  },

  receivedBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C8D6EE',
  },

  sentText: {
    color: '#fff',
  },

  receivedText: {
    color: '#000',
  },

  textInput: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#C8D6EE',
  },

  button: {
    marginTop: 10,
    backgroundColor: '#0A84FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
