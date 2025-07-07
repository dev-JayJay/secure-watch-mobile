import React, { ComponentProps } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { spacerProps } from "../types/theme";
import { MaterialIcons } from "@expo/vector-icons";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

export const Spacer = ({ width = 100, height = 40, style }: spacerProps) => {
  return <View style={[{ width, height }, style]} />;
};


export const IncedentComponent = ({
  type,
  location,
  icon,
  color,
}: {
  type: string;
  location: string;
  icon: MaterialIconName;
  color?: string;
}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={32} color={color} />
      <View className="flex flex-col gap-1 px-2">
        <Text className="text-[#333333] text-xl font-semibold">{type}</Text>
        <Text className="text-base text-[#B0B0B0] text-wrap font-normal"
        numberOfLines={1}
        ellipsizeMode="tail"
        >{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '91.6667%', 
    marginHorizontal: 'auto',
    flexDirection: 'row',
    gap: 8, 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 12, 
    paddingVertical: 20, 
    overflow: 'hidden',

    // Shadow for iOS
    shadowColor: '#94a3b8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // Shadow for Android
    elevation: 3, 
    backgroundColor: '#fff'
  }
});