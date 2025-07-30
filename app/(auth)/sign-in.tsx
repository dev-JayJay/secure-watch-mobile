import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <LinearGradient
      colors={["#D5E6DC", "#EDF5F1", "#D5E6DC"]}
      className="flex-1 justify-center items-center"
    >
      <SafeAreaView className="flex-1 justify-center px-6">
        <View className="mb-10">
          <Text className="text-[#333333] text-3xl font-bold">
            Welcome to Securewatch
          </Text>
          <Text className="text-[#33333399] text-xl">Sign in to your account</Text>
        </View>

        <View className="gap-6">
          <View className="space-y-2">
            <Text className="text-[#333333] text-lg font-medium">Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.identifier}
              onChangeText={(text) => handleChange("identifier", text)}
              className="border border-[#B0B0B0B8] text-[#B0B0B0B8] py-5 px-5 rounded-xl text-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-[#333333] text-lg font-medium">Password</Text>
            <TextInput
              placeholder="* * * * * * * *"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
              className="border border-[#B0B0B0B8] text-[#B0B0B0B8] py-5 px-5 rounded-xl"
            />
          </View>

          <TouchableOpacity
            onPress={() => router.push(`/home`)}
            className="bg-[#144E32] border border-[#B0B0B0B8] py-5 rounded-xl"
          >
            <Text className="text-white text-center text-xl font-semibold">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          onPress={() => router.push("/sign-up")}
          className="underline text-center text-[#144E32]/60 text-base font-medium mt-6"
        >
          Don't have an account? Sign up
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
