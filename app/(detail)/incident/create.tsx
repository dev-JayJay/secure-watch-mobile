import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

const INCIDENT_TYPES = ["Fire", "Flood", "Accident", "Theft", "Other"];
const SEVERITY_LEVELS = ["Low", "Medium", "High"];
const PRIMARY_COLOR = "#144E32";

export default function CreateIncident() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(INCIDENT_TYPES[0]);
  const [severity, setSeverity] = useState(SEVERITY_LEVELS[0]);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  function onDateChange(event: DateTimePickerEvent, selectedDate?: Date) {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) setDate(selectedDate);
  }

  function handleSubmit() {
    if (!title || !location || !description) {
      Alert.alert("Please fill in all required fields.");
      return;
    }
    // TODO: Replace with actual submission logic (API etc.)
    Alert.alert("Incident Reported", `Title: ${title}\nType: ${type}`);
  }

  return (
    <LinearGradient colors={["#E6F0E9", "#F9FCF8"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 24 }}>
          <Text className="text-3xl font-extrabold text-[#144E32] mb-8">
            Report an Incident
          </Text>

          {/* Title */}
          <Text className="text-sm font-semibold text-gray-700 mb-2">Title *</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Enter incident title"
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-white shadow-sm"
            placeholderTextColor="#6b7280"
          />

          {/* Location */}
          <Text className="text-sm font-semibold text-gray-700 mb-2">Location *</Text>
          <TextInput
            value={location}
            onChangeText={setLocation}
            placeholder="Enter location"
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-white shadow-sm"
            placeholderTextColor="#6b7280"
          />

          {/* Incident Type */}
          <Text className="text-sm font-semibold text-gray-700 mb-2">Type</Text>
          <View className="flex-row flex-wrap mb-6">
            {INCIDENT_TYPES.map((incidentType) => (
              <TouchableOpacity
                key={incidentType}
                onPress={() => setType(incidentType)}
                className={`py-3 px-5 mr-3 mb-3 rounded-lg border ${
                  type === incidentType
                    ? "bg-[#144E32] border-[#144E32]"
                    : "bg-white border-gray-300"
                } shadow-sm`}
                activeOpacity={0.8}
              >
                <Text
                  className={`font-semibold ${
                    type === incidentType ? "text-white" : "text-gray-800"
                  }`}
                >
                  {incidentType}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Date */}
          <Text className="text-sm font-semibold text-gray-700 mb-2">Date</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-white shadow-sm"
            activeOpacity={0.7}
          >
            <Text className="text-gray-700">{date.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
              maximumDate={new Date()}
            />
          )}

          {/* Severity */}
          <Text className="text-sm font-semibold text-gray-700 mb-2">Severity</Text>
          <View className="flex-row mb-10">
            {SEVERITY_LEVELS.map((level) => (
              <TouchableOpacity
                key={level}
                onPress={() => setSeverity(level)}
                className={`flex-1 py-3 mx-1 rounded-lg border shadow-sm ${
                  severity === level
                    ? "bg-[#144E32] border-[#0f3d26]"
                    : "bg-white border-gray-300"
                }`}
                activeOpacity={0.8}
              >
                <Text
                  className={`text-center font-semibold ${
                    severity === level ? "text-white" : "text-gray-800"
                  }`}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Description */}
          <Text className="text-sm font-semibold text-gray-700 mb-2">Description *</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Describe the incident"
            multiline
            numberOfLines={5}
            className="border border-gray-300 rounded-lg p-4 mb-8 bg-white shadow-sm text-base"
            placeholderTextColor="#6b7280"
            textAlignVertical="top"
          />

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-[#144E32] rounded-lg py-4 shadow-lg"
            activeOpacity={0.85}
          >
            <Text className="text-white text-center font-extrabold text-lg tracking-wide">
              Submit Report
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
