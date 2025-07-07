import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#144E32",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 70,
          borderWidth: 1,
          borderRadius: 50,
          // borderColor: Colors.orange.default,
          // borderTopColor: Colors.orange.default,
          // backgroundColor: Colors.white.default,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            const iconWeight = focused ? "bold" : "regular";
            const iconColor = focused ? "#144E32" : "#B0B0B0";
            return (
              <FontAwesome
                name="home"
                size={25}
                color={iconColor}
                weight={iconWeight}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="incident"
        options={{
          headerShown: false,
          tabBarLabel: "Incident",
          tabBarIcon: ({ focused }) => {
            const iconWeight = focused ? "bold" : "regular";
            const iconColor = focused ? "#144E32" : "#B0B0B0";
            return (
              <FontAwesome
                name="exclamation-circle"
                size={25}
                color={iconColor}
                weight={iconWeight}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            const iconWeight = focused ? "bold" : "regular";
            const iconColor = focused ? "#144E32" : "#B0B0B0";
            return (
              <FontAwesome
                name="user"
                size={25}
                color={iconColor}
                weight={iconWeight}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
