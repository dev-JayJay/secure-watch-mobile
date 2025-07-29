import React, { JSX } from "react";
import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import { AlertCircle, Zap, Droplet, ShieldAlert } from "lucide-react-native";

type IncidentType = "Accident" | "Flood" | "Power Outage" | "Robbery" | string;
type Severity = "High" | "Medium" | "Low";

type IncidentCardProps = {
  type: IncidentType;
  location: string;
  date: string; 
  severity: Severity | any;
  onPress?: (event: GestureResponderEvent) => void;
};

const typeIcons: Record<IncidentType, JSX.Element> = {
  Accident: <AlertCircle color="#dc2626" size={36} />, 
  Flood: <Droplet color="#2563eb" size={36} />, 
  "Power Outage": <Zap color="#f59e0b" size={36} />, 
  Robbery: <ShieldAlert color="#6b7280" size={36} />,
};

const severityColors: Record<Severity, string> = {
  High: "bg-red-600",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

export default function IncidentCard({
  type,
  location,
  date,
  severity,
  onPress,
}: IncidentCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-[#F5F9F7] border border-gray-300 rounded-lg p-4 mb-4 flex-row items-center shadow-md"
      android_ripple={{ color: "#ddd" }}
    >
      <View className="mr-4">
        {typeIcons[type] || <AlertCircle color="#6b7280" size={36} />}
      </View>

      <View className="flex-1">
        <Text
          className="text-lg font-bold text-gray-900 mb-1"
          numberOfLines={1}
        >
          {type}
        </Text>
        <Text className="text-gray-700 mb-1" numberOfLines={1}>
          {location}
        </Text>
        <Text className="text-gray-500 text-sm mb-2">{date}</Text>

        <View className="flex-row justify-between items-center">
          <View
            className={`rounded-full px-3 py-1 ${
              severityColors[severity as Severity] || "bg-gray-400"
            }`}
          >
            <Text className="text-white font-semibold text-xs">{severity}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
