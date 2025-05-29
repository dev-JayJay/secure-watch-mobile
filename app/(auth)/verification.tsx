import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemeView from "../../components/theme/ThemeView";
import { useRouter } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

const verification = () => {
  const router = useRouter();
  const goto = () => {
    router.push("/home");
  };
  return (
    <ThemeView>
      <ThemeView className="w-[90%] mx-auto mt-20">
        <Text className="text-[#333333] font-bold text-[25px]">
          Input Verification code
        </Text>
        <Text className="text-[#33333399] font-medium text-[16px] mt-2">
          {/* use redux to capture phone number */}
          We’ve sent a 6-digit code to +234 {`793 9483 904`}.
        </Text>
        <OtpInput
          numberOfDigits={6}
          focusColor="#144E32"
          autoFocus={false}
          hideStick={true}
          placeholder="------"
          blurOnFilled={true}
          disabled={false}
          type="numeric"
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
        />
        <Text className="text-[#33333399] font-medium text-[16px] mt-2">
          Code will be inactive in <Text className="text-black">3:00</Text>
        </Text>
      </ThemeView>
      <Pressable
        onPress={goto}
        className="w-[90%] mx-auto mt-10 bg-[#144E32] py-4 rounded-full text-white font-medium"
      >
        <Text className="text-center text-base text-white font-medium">
          Verify OTP
        </Text>
      </Pressable>
    </ThemeView>
  );
};

export default verification;

const styles = StyleSheet.create({});
