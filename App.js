import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box
} from "native-base";

import { Platform } from "react-native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "./components/Home/HomePage";
import NativeBasePage from "./components/Home/NativeBasePage";
import Application_Step1 from "./components/Home/Application/Application_Step1";
import { enableScreens } from "react-native-screens";

enableScreens();

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="NativeBase">
          <Stack.Screen name="NativeBase" component={NativeBasePage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="ApplicationStep1" component={Application_Step1} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



