import React, { JSX } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

type TabRouteName = "home" | "incident" | "sos" | "profile";

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const icons: Record<TabRouteName, (props: any) => JSX.Element> = {
    home: (props: any) => (
      <Entypo name="home" size={24} color="#144E32" {...props} />
    ),
    incident: (props: any) => (
      <MaterialIcons
        name="emergency-share"
        size={28}
        color="#144E32"
        {...props}
      />
    ),
    sos: (props: any) => (
      <MaterialCommunityIcons
        name="car-emergency"
        size={24}
        color="#144E32"
        {...props}
      />
    ),
    profile: (props: any) => (
      <FontAwesome5 name="user-alt" size={24} color="#144E32" {...props} />
    ),
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabButton]}
          >
            {icons[route.name as TabRouteName]({
              color: isFocused ? "#144E32" : "#888",
            })}
            {typeof label === "function" ? (
              label({
                focused: isFocused,
                color: isFocused ? "#144E32" : "#888",
                position: "below-icon",
                children: route.name,
              })
            ) : (
              <Text style={isFocused ? styles.activeText : styles.inactiveText}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDF5F1",
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    // height: 60,
    // borderTopWidth: 1,
    // borderTopColor: '#ccc',
    // borderRadius: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  activeText: {
    color: "#144E32",
    fontWeight: "bold",
    fontSize: 11,
  },
  inactiveText: {
    color: "#888",
    fontSize: 11,
  },
});

export default CustomTabBar;
