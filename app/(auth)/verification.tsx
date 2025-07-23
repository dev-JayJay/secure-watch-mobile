import React from "react";
import { Pressable, StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import ThemeView from "../../components/theme/ThemeView";
import { useRouter } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

const Verification = () => {
  const router = useRouter();

  const goto = () => {
    // You can validate OTP here before navigating
    router.push("/home");
  };

  return (
    <ThemeView safe={true} className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="w-[90%] mx-auto mt-20">
            {/* Header */}
            <Text className="text-[#144E32] font-bold text-2xl mb-2">
              Verify your Phone Number
            </Text>
            <Text className="text-[#33333399] font-medium text-base">
              We’ve sent a 6-digit code to{" "}
              <Text className="text-[#333333] font-semibold">+234 793 9483 904</Text>
            </Text>

            {/* OTP Input */}
            <View className="mt-10">
              <OtpInput
                numberOfDigits={6}
                focusColor="#144E32"
                autoFocus={false}
                hideStick={true}
                blurOnFilled={true}
                secureTextEntry={false}
                onTextChange={(code) => console.log("Entered OTP:", code)}
                theme={{
                  containerStyle: {
                    justifyContent: "space-between",
                    width: "100%",
                  },
                  pinCodeContainerStyle: {
                    borderColor: "#D1D5DB",
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 45,
                    height: 60,
                  },
                  pinCodeTextStyle: {
                    color: "#144E32",
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                }}
              />
            </View>

            {/* Countdown */}
            <Text className="text-[#33333399] text-base mt-4 text-center">
              Code will expire in <Text className="text-black font-semibold">03:00</Text>
            </Text>

            {/* Verify Button */}
            <Pressable
              onPress={goto}
              className="mt-10 bg-[#144E32] py-4 rounded-full shadow-sm"
            >
              <Text className="text-white text-center text-base font-semibold">
                Verify OTP
              </Text>
            </Pressable>

            {/* Resend link (optional) */}
            <Text className="text-center text-[#144E32] font-semibold mt-5">
              Didn't receive code? <Text className="underline">Resend</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemeView>
  );
};

export default Verification;

const styles = StyleSheet.create({});
