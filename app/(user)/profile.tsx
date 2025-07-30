import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileDetails() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const user = {
    name: "John Jonathan",
    email: "jay.jay@example.com",
    phone: "+234 983 3325 333",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "Passionate software developer and problem solver.",
  };

  function handleLogout() {
    Alert.alert("Logout", "You have been logged out.");
  }

  return (
    <LinearGradient
      colors={["#D5E6DC", "#EDF5F1", "#D5E6DC"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
          {/* Avatar */}
          <View className="rounded-full overflow-hidden border-4 border-[#144E32] mb-6 self-center">
            <Image source={{ uri: user.avatar }} className="w-40 h-40" />
          </View>

          {/* Name & Bio */}
          <Text className="text-3xl font-extrabold text-[#144E32] mb-2 text-center">
            {user.name}
          </Text>
          <Text className="text-base italic text-gray-600 mb-8 text-center px-6">
            {user.bio}
          </Text>

          {/* User Info Section */}
          <View className="mb-8 bg-[#D5E6DC] rounded-lg shadow-md p-6">
            <Text className="text-lg font-semibold text-gray-700 mb-4">
              Contact Information
            </Text>
            <View className="border-b border-gray-300 pb-3 mb-4">
              <Text className="text-sm font-semibold text-gray-500">Email</Text>
              <Text className="text-base font-medium text-gray-800">
                {user.email}
              </Text>
            </View>
            <View>
              <Text className="text-sm font-semibold text-gray-500">Phone</Text>
              <Text className="text-base font-medium text-gray-800">
                {user.phone}
              </Text>
            </View>
          </View>

          {/* Settings Section */}
          <View className="mb-8 bg-[#D5E6DC] rounded-lg shadow-md p-6">
            <Text className="text-lg font-semibold text-gray-700 mb-4">
              Settings
            </Text>

            {/* Notification toggle */}
            <View className="flex-row justify-between items-center py-3 border-b border-gray-300">
              <Text className="text-base font-medium text-gray-800">
                Notifications
              </Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#d1d5db", true: "#144E32" }}
                thumbColor={notificationsEnabled ? "#144E32" : "#f9fafb"}
              />
            </View>

            {/* Dark Mode toggle */}
            <View className="flex-row justify-between items-center py-3">
              <Text className="text-base font-medium text-gray-800">
                Dark Mode
              </Text>
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
                trackColor={{ false: "#d1d5db", true: "#144E32" }}
                thumbColor={darkModeEnabled ? "#144E32" : "#f9fafb"}
              />
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            onPress={handleLogout}
            className="w-full bg-red-600 rounded-lg py-3"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
