import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemeView from "../../components/theme/ThemeView";
import { login_choice } from "../../constants/auth-choice";

const Login = () => {
  return (
    <ThemeView safe={true}>
      <ThemeView className="w-[90%] mx-auto mt-20">
        <Text className="text-[#333333] font-bold text-[25px]">
          Welcome To Securewatch
        </Text>
        <Text className="text-[#33333399] font-bold text-[18px] mt-2">
          Create an Account.
        </Text>
      </ThemeView>
      <ThemeView className="w-[80%] mx-auto flex flex-col gap-6 mt-10">
        {login_choice.map((choice, index) => {
          return (
            <ThemeView
              key={index}
              className="flex flex-row gap-4 items-center text-center border border-[#0000001A] py-3 rounded-full"
            >
              <Image source={choice.image} className="ml-5 mr-7" />
              <Text className="text-[#333333] text-[14px] font-medium">
                {choice.text}
              </Text>
            </ThemeView>
          );
        })}
      </ThemeView>
      <ThemeView className="w-[80%] mx-auto my-10 flex flex-row items-center justify-center overflow-hidden">
        <View className="h-[0.8px] w-full bg-[#00000014]"></View>
        <Text className="px-5 text-[#00000069] text-[14px] font-bold">OR</Text>
        <View className="h-[0.8px] w-full bg-[#00000014]"></View>
      </ThemeView>
      <ThemeView className="w-[80%] mx-auto">
        <Text className="text-[#333333] text-[14px] font-medium mb-2 ml-1">
          Phone Number
        </Text>
        <ThemeView className="flex flex-row items-center gap-2 border border-[#0000001A] rounded-full">
          <Text className="border-r border-r-[#0000001F] px-3 text-[#B0B0B0B8] text-medium text-[14px]">
            +234
          </Text>
          <TextInput className="w-[90%] py-4" />
        </ThemeView>
      </ThemeView>
      <Pressable className="w-[90%] mx-auto mt-10 bg-[#144E32] py-4 rounded-full">
        <Link
          href="/info"
          className="text-center text-base text-white font-medium"
        >
          Sign Up
        </Link>
      </Pressable>
      <Text className="font-bold text-[14px] text-[#333333B8] text-center my-9">
        Have an Account?{" "}
        <Link href="/register" className="font-bold text-[14px] text-[#144E32]">
          Sign In
        </Link>
      </Text>
    </ThemeView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 40,
    fontWeight: 600,
  },
});
