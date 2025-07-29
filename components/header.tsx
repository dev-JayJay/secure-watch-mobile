import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapPin, ChevronDown, Bell } from "lucide-react-native";

export default function ApplicationHeader() {
  return (
    <View  style={styles.container}>
      <View className="">
        <Text className="text-base font-semibold">Current Location</Text>
        <View className="flex flex-row gap-2 items-center">
          <MapPin color={`#144E32`} size={28} />
          <Text className="text-lg font-normal">Lungi Avenue, Keffi</Text>
          <ChevronDown />
        </View>
      </View>
      <Bell color={`#144E32`} size={34} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F9F7",
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 16,
    borderColor: "#D1D5DB", // Tailwind's gray-300
    borderWidth: 1,

    // Custom soft shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 2, // Android soft shadow
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

