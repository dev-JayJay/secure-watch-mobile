import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  return (
    <View>
      <Text>this is the sign-in screen (login)</Text>
      <Button title="Go to Sign Up" onPress={() => router.push("/sign-up")} />
    </View>
  );
}
