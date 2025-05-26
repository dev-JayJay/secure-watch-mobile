import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>info</Text>
      <Link href='/login'>login</Link>
      <Link href='/register'>register</Link>
    </View>
  )
}

export default Info;

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