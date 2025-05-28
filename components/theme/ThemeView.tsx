import React from "react";
import { StyleSheet, useColorScheme, Text, View } from "react-native";
import { ThemeViewProps } from "../../types/theme";
import { applicationColors } from "../../constants/app-colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemeView = ({
  safe = false,
  className,
  children,
  ...props
}: ThemeViewProps) => {
  if (!safe)
    return (
      <View className={className} {...props}>
        {children}
      </View>
    );

  const insets = useSafeAreaInsets();
  return (
    <View
      style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}
      className={className}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemeView;

const styles = StyleSheet.create({});
