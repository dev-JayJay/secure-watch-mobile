import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Link href='/home'>go to home</Link>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "green",
        fontSize: 40,
        fontWeight: 600,
    }
})