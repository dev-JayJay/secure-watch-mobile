import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import ThemeView from "../../components/theme/ThemeView";
import { login_choice } from "../../constants/auth-choice";

const Login = () => {
  const router = useRouter();
  const goto = () => {
    router.push("/verification");
  };

  return (
    <ThemeView safe={true} className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="px-6 pt-16"
        >
          {/* Header */}
          <View className="mb-10">
            <Text className="text-[#144E32] font-extrabold text-3xl mb-2">
              Welcome To Securewatch
            </Text>
            <Text className="text-[#33333399] font-semibold text-lg">
              Create an Account.
            </Text>
          </View>

          {/* Login Choices */}
          <View className="mb-12 space-y-4">
            {login_choice.map((choice, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                className="flex-row items-center border border-[#0000001A] rounded-full py-4 px-6 shadow-sm bg-white"
              >
                <Image
                  source={choice.image}
                  className="w-8 h-8 mr-6"
                  resizeMode="contain"
                />
                <Text className="text-[#333333] text-base font-medium">
                  {choice.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Divider */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-[1px] bg-[#00000014]" />
            <Text className="px-5 text-[#00000069] font-bold text-sm">OR</Text>
            <View className="flex-1 h-[1px] bg-[#00000014]" />
          </View>

          {/* Phone Input */}
          <View className="mb-8">
            <Text className="text-[#333333] text-sm font-medium mb-2 ml-1">
              Phone Number
            </Text>
            <View className="flex-row items-center border border-[#0000001A] rounded-full overflow-hidden bg-white">
              <View className="px-4 border-r border-r-[#0000001F] justify-center">
                <Text className="text-[#B0B0B0B8] text-base font-medium">
                  +234
                </Text>
              </View>
              <TextInput
                keyboardType="phone-pad"
                placeholder="Enter your phone number"
                placeholderTextColor="#B0B0B0B8"
                className="flex-1 py-4 px-4 text-base text-[#333333]"
                style={{ fontWeight: "500" }}
              />
            </View>
          </View>

          {/* Sign Up Button */}
          <Pressable
            onPress={goto}
            className="bg-[#144E32] py-5 rounded-full shadow-lg"
            android_ripple={{ color: "#0f3a1d" }}
          >
            <Text className="text-center text-white text-lg font-semibold">
              Sign Up
            </Text>
          </Pressable>

          {/* Sign In Link */}
          <View className="mt-10 mb-6 flex-row justify-center">
            <Text className="text-[#333333B8] text-sm font-semibold">
              Have an Account?{" "}
            </Text>
            <Link
              href="/register"
              className="text-[#144E32] font-extrabold text-sm"
            >
              Sign In
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemeView>
  );
};

export default Login;
