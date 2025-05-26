import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Incident = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Incident</Text>
    </View>
  )
}

export default Incident;

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