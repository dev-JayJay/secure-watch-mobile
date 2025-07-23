import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ThemeView from "../../components/theme/ThemeView";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const Register = () => {
  const router = useRouter();

  const handleRegister = () => {
    // You can add form validation before navigating
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
          className="px-6 pt-16"
          keyboardShouldPersistTaps="handled"
        >
          {/* Title */}
          <View className="mb-10">
            <Text className="text-[#144E32] font-extrabold text-3xl mb-2">
              Create your account
            </Text>
            <Text className="text-[#33333399] font-semibold text-base">
              Join Securewatch and stay protected.
            </Text>
          </View>

          {/* Input Fields */}
          <View className="flex flex-col gap-4 space-y-6">
            <View>
              <Text className="text-[#333333] mb-1 font-medium">Full Name</Text>
              <TextInput
                placeholder="John Doe"
                placeholderTextColor="#B0B0B0"
                className="border border-[#00000020] rounded-lg px-5 py-4 text-base text-[#333] bg-white"
              />
            </View>

            <View>
              <Text className="text-[#333333] mb-1 font-medium">Phone Number</Text>
              <TextInput
                placeholder="+234 812 345 6789"
                keyboardType="phone-pad"
                placeholderTextColor="#B0B0B0"
                className="border border-[#00000020] rounded-lg px-5 py-4 text-base text-[#333] bg-white"
              />
            </View>

            <View>
              <Text className="text-[#333333] mb-1 font-medium">Password</Text>
              <TextInput
                placeholder="* * * * * * * *"
                secureTextEntry
                placeholderTextColor="#B0B0B0"
                className="border border-[#00000020] rounded-lg px-5 py-4 text-base text-[#333] bg-white"
              />
            </View>
          </View>

          {/* Register Button */}
          <Pressable
            onPress={handleRegister}
            className="mt-10 bg-[#144E32] py-5 rounded-full shadow-lg"
            android_ripple={{ color: "#0f3a1d" }}
          >
            <Text className="text-center text-white text-lg font-semibold">
              Register
            </Text>
          </Pressable>

          {/* Link to Login */}
          <View className="mt-10 mb-6 flex-row justify-center">
            <Text className="text-[#333333B8] text-sm font-semibold">
              Already have an account?{" "}
            </Text>
            <Link
              href="/login"
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

export default Register;
