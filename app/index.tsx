import { Button, StatusBar } from "react-native";

import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ThemeView from "../components/theme/ThemeView";
import Spacer from "../components/spacer";
import WelComeImage from "../assets/images/first-page-image.png";
import { Link } from "expo-router";

export default function App() {
  return (
    <ThemeView safe={true} className="">
      <ThemeView className="w-[90%] mx-auto mt-20">
        <Text className="text-[#333333] font-bold text-[28px]">Welcome To Securewatch</Text>
        <Text className="text-[#33333399] font-bold text-base mt-2">Your trusted tool for reporting incidents and staying alert in your community.</Text>
      </ThemeView>
        <Image source={WelComeImage} className="w-[93%] mx-auto mt-10" />
        <Pressable className="w-[90%] mx-auto mt-10 bg-[#144E32] py-4 rounded-full">
          <Link href='/info' className="text-center text-base text-white font-medium">Get Started</Link>
        </Pressable>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  screen_header: {
    fontSize: 28,
    fontWeight: 700,
    paddingLeft: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: 500,
    paddingLeft: 10,
  },
  welcome_image: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  goto_button: {
    backgroundColor: "#144E32",
    borderRadius: 100,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 20,
    marginRight: 20,
  },
});
