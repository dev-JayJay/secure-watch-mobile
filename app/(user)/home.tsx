import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ApplicationHeader from "../../components/header";
import MapScreen from "../../components/MapScreen";
import IncidentCard from "../../components/IncidentCard";
import { incidents } from "../../constants/incidents";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#D5E6DC", "#EDF5F1", "#D5E6DC"]}
      className="flex-1"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="pt-4">
          <ApplicationHeader />
        </View>
        <ScrollView>
          <View>
            <MapScreen />
          </View>
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
                onPress={() => router.push(`/incident/${incident.id}`)}
              />
            ))}
            <TouchableOpacity onPress={() => router.push("/home")}>
              <Text className="border border-red-500 py-10">Goto </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
