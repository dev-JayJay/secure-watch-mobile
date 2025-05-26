import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
    </View>
  )
}

export default Register

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