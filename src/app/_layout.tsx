import "@/styles/global.css";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from "@expo-google-fonts/inter";

import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { Stack } from "expo-router";
import { colors } from "@/styles/colors";
import { StatusBar, View } from "react-native";

SplashScreen.preventAutoHideAsync(); // Impede que a Splash Screen suma automaticamente

export default function Layout() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Esconde a Splash Screen quando tudo estiver carregado
    }
  }, [fontsLoaded]);

  return (
    <View className="flex-1 bg-gray-700">
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.gray[700]}
      />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
