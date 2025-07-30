import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="flex items-center my-52 rounded-md"
    >
      <View className="w-11/12 mx-auto flex flex-col gap-10 items-start justify-center">
        <Text className="text-[#333333] text-3xl font-bold">Welcome To Securewatch</Text>
        <Text className="text-[#33333399] text-xl font-normal">
          Your trusted tool for reporting incidents and staying alert in your
          community.
        </Text>
        <TouchableOpacity
          onPress={() => router.push(`/sign-in`)}
          className="bg-[#144E32]  w-full mx-auto py-4 rounded-3xl text-center"
        >
          <Text className="text-white text-center">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
