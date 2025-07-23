import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ThemeView from "../components/theme/ThemeView";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Location = () => {
  return (
    <ThemeView className="flex-row items-center justify-between mx-6 my-4 p-3 bg-white rounded-xl shadow-md">
      {/* Left side: Location Info */}
      <TouchableOpacity className="flex-col">
        <Text className="text-gray-600 text-sm font-semibold mb-1">
          Current Location
        </Text>
        <ThemeView className="flex-row items-center gap-2">
          <FontAwesome6 name="location-dot" size={20} color="#1976D2" />
          <Text className="text-gray-900 text-lg font-medium">
            Lungi Avenue, Keffi
          </Text>
          <AntDesign name="down" size={18} color="#555555" />
        </ThemeView>
      </TouchableOpacity>

      {/* Right side: Notifications Icon */}
      <TouchableOpacity className="rounded-full bg-gray-100 p-3 shadow-sm">
        <Ionicons name="notifications-outline" size={28} color="#555555" />
      </TouchableOpacity>
    </ThemeView>
  );
};

export default Location;
