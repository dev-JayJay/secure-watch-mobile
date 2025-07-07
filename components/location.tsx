import React from "react";
import { StyleSheet, Text } from "react-native";
import ThemeView from "../components/theme/ThemeView";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Loaction = () => {
  return (
    <ThemeView className="flex flex-row items-center justify-between mx-10">
      <ThemeView className="flex flex-col">
        <Text className="text-[#333333] text-lg font-medium">
          Current Location
        </Text>
        <ThemeView className="flex flex-row gap-2 items-center justify-center">
          <FontAwesome6 name="location-dot" size={20} color="#1976D2" />
          <Text className="text-[#333333] text-xl font-medium">
            Lungi Avenue, Keffi
          </Text>
          <AntDesign name="down" size={20} color="black" />
        </ThemeView>
      </ThemeView>
      <ThemeView className="rounded-full border border-[#0000003D] p-2">
        <Ionicons
          name="notifications-outline"
          size={32}
          color="black"
          className="m-2"
        />
      </ThemeView>
    </ThemeView>
  );
};

export default Loaction;

const styles = StyleSheet.create({});
