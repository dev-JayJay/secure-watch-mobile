import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ApplicationHeader from "../components/header";
import MapScreen from "../components/MapScreen";
import IncidentCard from "../components/IncidentCard";
import { incidents } from "../constants/incidents";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-[#F5F9F7]">
      <View className="pt-4">
        <ApplicationHeader />
      </View>
      <View className="">
        <MapScreen />
      </View>
      <ScrollView className="p-4 ">
        {incidents.map((incident) => (
          <IncidentCard
            key={incident.id}
            type={incident.type}
            location={incident.location}
            date={incident.date}
            severity={incident.severity}
            onPress={() =>
              alert(`Tapped: ${incident.type} at ${incident.location}`)
            }
          />
        ))}
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text className="border border-red-500 py-10">Goto </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
