import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import spacerProps from '../types/theme'

const Spacer = ({width = 100, height = 40, style} : spacerProps) => {
  return (
    <View 
      style={[{width, height}, style]}
     />
  )
}

export default Spacer;

const styles = StyleSheet.create({})