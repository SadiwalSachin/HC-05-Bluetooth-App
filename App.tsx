// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SendPlainTextScreen from "./screens/SendTextScreen";
import SendVoiceDataScreen from "./screens/SendVoiceData";
import SendPDFScreen from "./screens/SendPDFData";
import TeachersModuleScreen from "./screens/TeachersModuleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: "#0A84FF" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Settings")}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Bluetooth HC-05" }}
        />

        <Stack.Screen
          name="Settings"
          component={() => null}
          options={{ title: "Settings" }}
        />

        <Stack.Screen
          name="PlainText"
          component={SendPlainTextScreen}
          options={{ title: "Send Plain Text" }}
        />

        <Stack.Screen
          name="VoiceData"
          component={SendVoiceDataScreen}
          options={{ title: "Send Voice Data" }}
        />

        <Stack.Screen
          name="PDFData"
          component={SendPDFScreen}
          options={{ title: "Send PDF Data" }}
        />

        <Stack.Screen
          name="TeachersModule"
          component={TeachersModuleScreen}
          options={{ title: "Teacher's Module" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}