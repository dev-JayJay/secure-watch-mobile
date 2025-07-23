import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { View, Platform } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#144E32",
        tabBarInactiveTintColor: "#B0B0B0",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: Platform.OS === "android" ? 6 : 0,
        },
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#ffffff",
          position: "absolute",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 20,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={22}
              color={focused ? "#144E32" : "#B0B0B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="incident"
        options={{
          headerShown: false,
          tabBarLabel: "Incident",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="exclamation-circle"
              size={22}
              color={focused ? "#144E32" : "#B0B0B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={22}
              color={focused ? "#144E32" : "#B0B0B0"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
