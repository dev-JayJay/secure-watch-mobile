import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import ThemeView from "../../components/theme/ThemeView";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  const user = {
    name: "John Jonathan",
    userName: "Jay Jay",
    email: "jay@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const menuItems = [
    {
      label: "Account Settings",
      icon: "settings-outline",
      route: "/settings",
    },
    {
      label: "My Reports",
      icon: "document-text-outline",
      route: "/reports",
    },
    {
      label: "Help & Support",
      icon: "help-circle-outline",
      route: "/support",
    },
  ];

  return (
    <ThemeView safe className="flex-1 bg-white dark:bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center justify-center mt-10 mb-6">
          <Image
            source={{ uri: user.avatar }}
            className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700"
          />
          <Text className="text-2xl font-semibold text-gray-900 dark:text-white">
            {user.name}
          </Text>
          <Text className="text-base text-gray-500 dark:text-gray-400 font-bold">
            {user.userName}
          </Text>
        </View>

        {/* Email Card */}
        <View className="bg-gray-100 dark:bg-gray-800 mx-5 rounded-xl px-5 py-4 mb-6 shadow-sm">
          <Text className="text-gray-500 dark:text-gray-400 text-base mb-1 font-bold">
            Email
          </Text>
          <Text className="text-base text-gray-900 dark:text-white">
            {user.email}
          </Text>
        </View>

        {/* Menu */}
        <View className="mx-5 space-y-4">
          {menuItems.map((item, index) => (
            <Link href={item.route} key={index} asChild>
              <TouchableOpacity className="flex-row items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-4">
                <View className="flex-row items-center gap-1 space-x-3">
                  <Ionicons name={item.icon as any} size={22} color="#4B5563" />
                  <Text className="text-gray-800 dark:text-white text-base font-medium">
                    {item.label}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        {/* Logout */}
        <View className="mx-5 mt-10">
          <TouchableOpacity className="flex-row items-center justify-center bg-red-100 dark:bg-red-900 py-4 rounded-xl">
            <MaterialIcons name="logout" size={20} color="#DC2626" />
            <Text className="ml-2 text-red-600 dark:text-red-400 font-medium text-base">
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        {/* Deep Link Test */}
        {/* <View className="mx-5 mt-6 items-center">
          <Link href="/" className="text-blue-500 underline text-sm">Check deep linking</Link>
        </View> */}
      </ScrollView>
    </ThemeView>
  );
};

export default Profile;
