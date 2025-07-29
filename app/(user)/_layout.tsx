import React from "react";
import { Tabs } from "expo-router";
import { Home, AlertTriangle, User } from "lucide-react-native"; // import icons you want

const tabs = [
  { name: "home", title: "Home", Icon: Home },
  { name: "profile", title: "Profile", Icon: User },
  { name: "incident", title: "Incident", Icon: AlertTriangle },
];

const HomeLayout = () => (
  <Tabs
    screenOptions={({ route }) => {
      const tab = tabs.find(tab => tab.name === route.name);
      return {
        tabBarIcon: ({ color, size }) => {
          const IconComponent = tab?.Icon;
          return IconComponent ? <IconComponent color={color} size={size} /> : null;
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
        options={{ title }} 
      />
    ))}
  </Tabs>
);

export default HomeLayout;
