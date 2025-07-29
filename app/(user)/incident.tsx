import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ApplicationHeader from "../../components/header";
import IncidentCard from "../../components/IncidentCard";
import { incidents } from "../../constants/incidents";
import { useRouter } from "expo-router";

export default function Incidents() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="pt-4">
        <ApplicationHeader />
      </View>
      <View>
        <ScrollView>
          <View className="p-4">
            <Text className="w-full border border-[#00000057] p-5 rounded-lg my-4 text-lg text-[#333333B2] font-medium">
              What are you reporting today?
            </Text>
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
