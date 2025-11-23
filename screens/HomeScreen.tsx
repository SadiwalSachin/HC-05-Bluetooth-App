import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const naigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NETRAA</Text>
      <Text style={styles.subtitle}>Choose an option below to continue</Text>

      {/* Buttons */}
      <TouchableOpacity
        onPress={() => naigation.navigate('PlainText')}
        style={styles.button}
      >
        <Text style={styles.btnText}>Send Plain Text</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => naigation.navigate('PDFData')}
      style={styles.button}>
        <Text style={styles.btnText}>Send PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => naigation.navigate('VoiceData')}
      style={styles.button}>
        <Text style={styles.btnText}>Send Voice Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => naigation.navigate('TeachersModule')}
      style={styles.button}>
        <Text style={styles.btnText}>Teacher’s Module</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF', // Off-white blueish background
    alignItems: 'center',
    paddingTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 30,
  },

  button: {
    width: '85%',
    paddingVertical: 14,
    backgroundColor: '#0A84FF',
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },

  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
