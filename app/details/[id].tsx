import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ThemeView from "../../components/theme/ThemeView";
import mapImage from "../../assets/images/Basemap image.png";
import { Ionicons } from "@expo/vector-icons";

const IncidentDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Mock data (replace with real fetch logic)
  const incident = {
    title: "Power Outage in Sector 5",
    time: "2025-07-23 14:35",
    severity: "High",
    description:
      "A power outage has been reported in Sector 5 due to a transformer failure. Technicians are currently working on-site. Estimated resolution time is 3 hours.",
    location: "Sector 5, Greenfield City",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
  };

  // Add mock reactions and comments
  const reactions = [
    { emoji: "👍", label: "Like", count: 12 },
    { emoji: "❤️", label: "Love", count: 32 },
    { emoji: "🚨", label: "Urgent", count: 5 },
    { emoji: "💔", label: "Heartbreak", count: 25 },
    { emoji: "👎", label: "Disagree", count: 2 },
  ];

  const comments = [
    {
      id: 1,
      user: "Alice",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "We’ve been facing this issue all day 😞",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Bob",
      avatar: "https://i.pravatar.cc/150?img=15",
      text: "Hope this gets fixed soon. Thanks for reporting.",
      time: "1 hour ago",
    },
  ];

  const statusColor = {
    "In Progress": "bg-yellow-100 text-yellow-800",
    Resolved: "bg-green-100 text-green-800",
    Critical: "bg-red-100 text-red-800",
  };

  return (
    <ThemeView safe={true} className="flex-1 bg-white dark:bg-gray-900">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        className="px-4 pt-6"
      >
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Ionicons
              name="arrow-back"
              size={24}
              color="#1f2937"
            />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-800 dark:text-white">
            Incident Details
          </Text>
        </View>

        {/* Title & ID */}
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {incident.title}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Incident ID: {id}
        </Text>

        {/* Status */}
        <View
          className={`self-start px-3 py-1 rounded-full mb-4 ${
            statusColor[incident.status as keyof typeof statusColor] ||
            "bg-gray-200 text-gray-700"
          }`}
        >
          <Text className="text-xs font-medium">{incident.status}</Text>
        </View>

        {/* Incident Image */}
        <Image
          source={{ uri: incident.image }}
          className="w-full h-52 rounded-xl mb-6"
          resizeMode="cover"
        />

        {/* Metadata */}
        <View className="mb-6">
          <Text className="text-base text-gray-700 dark:text-gray-300 mb-1">
            <Text className="font-semibold">Time: </Text>
            {incident.time}
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            <Text className="font-semibold">Severity: </Text>
            <Text
              className={`font-semibold ${
                incident.severity === "High"
                  ? "text-red-600 dark:text-red-400"
                  : "text-yellow-600"
              }`}
            >
              {incident.severity}
            </Text>
          </Text>
        </View>

        {/* Description */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Description
          </Text>
          <Text className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {incident.description}
          </Text>
        </View>

        {/* Location */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Location
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            {incident.location}
          </Text>
        </View>

        {/* Map Preview */}
        <ThemeView className="w-full h-60 overflow-hidden border border-gray-300 dark:border-gray-700">
          <Image
            source={mapImage}
            className="w-full h-full"
            resizeMode="cover"
          />
        </ThemeView>
        {/* Reactions */}
        <View className="mt-8 mb-4">
          <Text className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Reactions
          </Text>
          <View className="flex-row space-x-4">
            {reactions.map((reaction, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full"
              >
                <Text className="text-lg mr-1">{reaction.emoji}</Text>
                <Text className="text-sm text-gray-700 dark:text-gray-300">
                  {reaction.count}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Comments Section */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Comments
          </Text>
          {comments.map((comment) => (
            <View key={comment.id} className="flex-row mb-4">
              <Image
                source={{ uri: comment.avatar }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <View className="flex-1 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <Text className="font-medium text-gray-900 dark:text-white mb-1">
                  {comment.user}{" "}
                  <Text className="text-xs text-gray-500 dark:text-gray-400">
                    • {comment.time}
                  </Text>
                </Text>
                <Text className="text-sm text-gray-800 dark:text-gray-300">
                  {comment.text}
                </Text>
              </View>
            </View>
          ))}

          {/* Add Comment Box */}
          <View className="flex-row items-center mt-4">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=7" }}
              className="w-10 h-10 rounded-full mr-3"
            />
            <View className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2">
              <Text className="text-sm text-gray-500 dark:text-gray-400">
                Write a comment...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemeView>
  );
};

export default IncidentDetails;
