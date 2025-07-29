import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";

export default function SignUp() {
      const router = useRouter();
  return (
    <View>
      <Text>this is the sign-up screen (register)</Text>
       <Button
        title="Go to Sign In"
        onPress={() => router.push("/sign-in")} 
      />
    </View>
  )
}