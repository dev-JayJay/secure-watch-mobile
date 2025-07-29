import React from "react";
import { Tabs } from "expo-router";
import { Home, AlertTriangle, User } from "lucide-react-native";

const tabs = [
  { name: "home", title: "Home", Icon: Home },
  { name: "incident", title: "Incident", Icon: AlertTriangle },
  { name: "profile", title: "Profile", Icon: User },
];

const HomeLayout = () => (
  <Tabs
    screenOptions={({ route }) => {
      const tab = tabs.find((tab) => tab.name === route.name);
      return {
        tabBarIcon: ({ color, size }) => {
          const IconComponent = tab?.Icon;
          return IconComponent ? (
            <IconComponent color={color} size={size} />
          ) : null;
        },
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      };
    }}
  >
    {tabs.map(({ name, title }) => (
      <Tabs.Screen
        key={name}
        name={name}
        options={{ title, headerShown: false }}
      />
    ))}
  </Tabs>
);

export default HomeLayout;
