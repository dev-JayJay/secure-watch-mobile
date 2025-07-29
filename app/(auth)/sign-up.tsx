import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
            Create a Securewatch Account
          </Text>
          <Text className="text-[#33333399] text-xl">Sign up to get started</Text>
        </View>

        <View className="gap-6">
          <View className="space-y-2">
            <Text className="text-[#333333] text-lg font-medium">Username</Text>
            <TextInput
              placeholder="yourusername"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
              value={formData.username}
              onChangeText={(text) => handleChange("username", text)}
              className="border border-[#B0B0B0B8] text-[#B0B0B0B8] py-5 px-5 rounded-xl text-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-[#333333] text-lg font-medium">Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
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
              className="border border-[#B0B0B0B8] text-[#B0B0B0B8] py-5 px-5 rounded-xl text-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-[#333333] text-lg font-medium">
              Confirm Password
            </Text>
            <TextInput
              placeholder="* * * * * * * *"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
              className="border border-[#B0B0B0B8] text-[#B0B0B0B8] py-5 px-5 rounded-xl text-lg"
            />
          </View>

          <TouchableOpacity
            onPress={() => router.push(`/home`)}
            className="bg-[#144E32] border border-[#B0B0B0B8] py-5 rounded-xl"
          >
            <Text className="text-white text-center text-xl font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <Text className="text-[#144E32]/60 text-sm text-center my-6">
          OR CONTINUE WITH
        </Text>

        {/* OAuth Buttons */}
        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity className="bg-[#144E32]/10 p-4 rounded-full">
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/google-logo.png",
              }}
              className="w-6 h-6"
            />
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#144E32]/10 p-4 rounded-full">
            <Image
              source={{
                uri: "https://img.icons8.com/fluency/48/facebook-new.png",
              }}
              className="w-6 h-6"
            />
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#144E32]/10 p-4 rounded-full">
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/50/ffffff/mac-os.png",
              }}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>

        {/* Already have an account? */}
        <Text
          onPress={() => router.push("/sign-in")}
          className="underline text-center text-[#144E32]/60 text-base font-medium mt-6"
        >
          Already have an account? Sign in
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
