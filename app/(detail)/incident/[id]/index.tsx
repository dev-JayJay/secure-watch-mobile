import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  AlertCircle,
  MapPin,
  CalendarDays,
  ThumbsUp,
  Flag,
  ArrowLeft,
} from "lucide-react-native";

const PRIMARY = "#144E32";

export default function IncidentDetails() {
  const router = useRouter();

  // Dummy incident
  const incident = {
    id: "12345",
    title: "Gas Leak in Downtown Area",
    type: "Hazard",
    location: "45 Main Street, Downtown",
    date: "July 30, 2025",
    severity: "High",
    description:
      "A gas leak was detected in the main pipeline around 8:00 AM. Authorities have been alerted and evacuation of the area is underway.",
    image:
      "https://fastly.picsum.photos/id/353/400/300.jpg?hmac=6Bi93Esbjm0zGPfK52j1ShfVQeOxi8PyChEXAt3Dz9c",
  };

  const [comments, setComments] = useState([
    {
      id: "c1",
      name: "Aisha Bello",
      text: "Thanks for the update. Hoping everyone is safe.",
      time: "2 hours ago",
    },
    {
      id: "c2",
      name: "John Smith",
      text: "Can we still access the west entrance?",
      time: "1 hour ago",
    },
  ]);

  const [commentText, setCommentText] = useState("");
  const [reactions, setReactions] = useState({
    like: 4,
    alert: 2,
    support: 3,
    seen: 6,
    sad: 1,
  });

  const handleAddComment = () => {
    if (commentText.trim() === "") return;
    const newComment = {
      id: Date.now().toString(),
      name: "You",
      text: commentText.trim(),
      time: "Just now",
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const handleReact = (type: keyof typeof reactions) => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <LinearGradient colors={["#E6F0E9", "#F9FCF8"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 24 }}>
          {/* Header */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="mb-6 bg-[#144E32] p-3 rounded-full w-12 h-12 items-center justify-center"
            activeOpacity={0.7}
          >
            <Text className="text-base text-white font-semibold">
              <ArrowLeft color={"white"} />
            </Text>
          </TouchableOpacity>

          {/* Incident image */}
          {incident.image && (
            <View className="rounded-xl overflow-hidden mb-6 shadow-md">
              <Image
                source={{ uri: incident.image }}
                resizeMode="cover"
                className="w-full h-48"
              />
            </View>
          )}

          {/* Title */}
          <Text className="text-2xl font-extrabold text-[#144E32] mb-2">
            {incident.title}
          </Text>

          {/* Metadata */}
          <View className="mb-6 space-y-2">
            <View className="flex-row items-center">
              <AlertCircle color={PRIMARY} size={18} />
              <Text className="ml-2 text-base text-gray-800 font-medium">
                Type: {incident.type}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MapPin color={PRIMARY} size={18} />
              <Text className="ml-2 text-base text-gray-800 font-medium">
                Location: {incident.location}
              </Text>
            </View>
            <View className="flex-row items-center">
              <CalendarDays color={PRIMARY} size={18} />
              <Text className="ml-2 text-base text-gray-800 font-medium">
                Date: {incident.date}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="ml-[22px] text-base font-medium text-red-600">
                Severity: {incident.severity}
              </Text>
            </View>
          </View>

          {/* Description */}
          <View className="bg-white rounded-xl p-5 shadow-md mb-10">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              {incident.description}
            </Text>
          </View>

          {/* Reaction Section */}
          <View className="bg-white rounded-xl p-5 shadow-md mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Reactions
            </Text>
            <View className="flex-row justify-around">
              <TouchableOpacity
                className="items-center"
                onPress={() => handleReact("like")}
              >
                <Text className="text-2xl">👍</Text>
                <Text className="text-sm text-gray-600 mt-1">
                  {reactions.like} Like
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleReact("alert")}
              >
                <Text className="text-2xl">🚨</Text>
                <Text className="text-sm text-gray-600 mt-1">
                  {reactions.alert} Alert
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleReact("support")}
              >
                <Text className="text-2xl">❤️</Text>
                <Text className="text-sm text-gray-600 mt-1">
                  {" "}
                  {reactions.support} Support
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleReact("seen")}
              >
                <Text className="text-2xl">👀</Text>
                <Text className="text-sm text-gray-600 mt-1">
                  {reactions.seen} Seen
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center mb-4 w-[18%]"
                onPress={() => handleReact("sad")}
              >
                <Text className="text-2xl">💔</Text>
                <Text className="text-xs text-gray-600 mt-1 text-center">
                  {reactions.sad} Sad
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Comments */}
          <Text className="text-xl font-bold text-[#144E32] mb-4">
            Comments
          </Text>

          {/* Add Comment */}
          <View className="flex-row mb-6 items-center space-x-2">
            <TextInput
              value={commentText}
              onChangeText={setCommentText}
              placeholder="Add a comment..."
              className="flex-1 border border-gray-300 rounded-lg p-3 bg-white shadow-sm"
              placeholderTextColor="#6b7280"
            />
            <TouchableOpacity
              onPress={handleAddComment}
              className="bg-[#144E32] px-4 py-3 rounded-lg"
            >
              <Text className="text-white font-semibold">Post</Text>
            </TouchableOpacity>
          </View>

          {/* Comment list */}
          {comments.map((comment) => (
            <View
              key={comment.id}
              className="bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-100"
            >
              <Text className="text-sm font-bold text-gray-800">
                {comment.name}
              </Text>
              <Text className="text-gray-700 my-1">{comment.text}</Text>
              <View className="flex-row justify-between items-center mt-1">
                <Text className="text-xs text-gray-500">{comment.time}</Text>
                <View className="flex-row space-x-3">
                  <TouchableOpacity className="flex-row items-center">
                    <ThumbsUp size={16} color="#4B5563" />
                    <Text className="ml-1 text-xs text-gray-600">Like</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity className="flex-row items-center">
                    <Flag size={16} color="#DC2626" />
                    <Text className="ml-1 text-xs text-red-500">Report</Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
