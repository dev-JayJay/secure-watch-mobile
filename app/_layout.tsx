import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#144E32",
        // },
        // headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="details" options={{ title: "Incident Details" }} />
      <Stack.Screen name="info" options={{ title: "Information" }} />
      <Stack.Screen name="(auth)" options={{ title: "" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
