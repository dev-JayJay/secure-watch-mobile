import React from 'react'
import { StyleSheet, useColorScheme, Text } from 'react-native'
import { themeTextProps } from '../../types/theme'
import { applicationColors } from '../../constants/app-colors';

const ThemeText = ({style, title = false, ...props}: themeTextProps) => {

  const colorScheme = useColorScheme();
  const theme = applicationColors[colorScheme] ?? applicationColors.light;
  const textColor = title ? theme.title : theme.subText;

  return (
    <Text style={[{color: textColor}, style]} {...props}  />
  )
}

export default ThemeText

const styles = StyleSheet.create({});