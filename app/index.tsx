import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ThemeText from "../components/theme/ThemeText";
import Spacer from "../components/spacer";
import WelComeImage from "../assets/images/first-page-image.png";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer width={100} height={40} children={undefined} />
      <ThemeText title={true} style={styles.screen_header}>
        Welcome To Securewatch
      </ThemeText>
      <Spacer width={100} height={10} children={undefined} />
      <ThemeText style={styles.text}>
        Your trusted tool for reporting incidents and staying alert in your
        community.
      </ThemeText>
      <Spacer width={100} height={50} children={undefined} />
      <Image source={WelComeImage} style={styles.welcome_image} />
      <Spacer width={100} height={50} children={undefined} />
      <Pressable>
        <Link href="/info" style={styles.goto_button}>
          Get Started
        </Link>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
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
