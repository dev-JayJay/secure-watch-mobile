import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import ThemeView from "../components/theme/ThemeView";
import WelComeImage from "../assets/images/first-page-image.png";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/info");
  };

  return (
    <ThemeView safe={true} className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6 pt-20">
        {/* Header */}
        <View className="w-full max-w-xl">
          <Text className="text-[#144E32] font-extrabold text-3xl mb-2">
            Welcome To Securewatch
          </Text>
          <Text className="text-[#33333399] font-semibold text-base">
            Your trusted tool for reporting incidents and staying alert in your
            community.
          </Text>
        </View>

        {/* Image */}
        <Image
          source={WelComeImage}
          className="w-full max-w-xl h-60 mt-10"
          resizeMode="contain"
        />

        {/* Get Started Button */}
        <Pressable
          onPress={handleGetStarted}
          className="w-full max-w-xl bg-[#144E32] rounded-full py-5 mt-12 shadow-lg"
          android_ripple={{ color: "#0f3a1d" }}
        >
          <Text className="text-center text-white text-lg font-semibold">
            Get Started
          </Text>
        </Pressable>
      </View>
    </ThemeView>
  );
}
