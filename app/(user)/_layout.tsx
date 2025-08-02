import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "../../components/customTabBar";
import { Home, AlertTriangle, User, Siren } from "lucide-react-native";

const tabs = [
  { name: "index", title: "Home", Icon: Home },
  { name: "incident", title: "Incident", Icon: AlertTriangle },
  { name: "sos", title: "Sos", Icon: Siren },
  { name: "profile", title: "Profile", Icon: User },
];

const HomeLayout = () => (
  <Tabs
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={({ route }) => {
      const tab = tabs.find((tab) => tab.name === route.name);
      return {
        tabBarIcon: ({ color, size }) => {
          const IconComponent = tab?.Icon;
          return IconComponent ? (
            <IconComponent color={color} size={size} />
          ) : null;
        },
        tabBarActiveTintColor: "#144E32",
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
