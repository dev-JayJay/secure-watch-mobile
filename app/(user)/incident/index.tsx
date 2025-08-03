import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ApplicationHeader from "../../../components/header";
import IncidentCard from "../../../components/IncidentCard";
import { incidents } from "../../../constants/incidents";
import { useRouter } from "expo-router";
import NewsContainer from "../../../components/News";
import { LinearGradient } from "expo-linear-gradient";

export default function Incidents() {
  const router = useRouter();
  const [news, setNews] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <LinearGradient
      colors={["#D5E6DC", "#EDF5F1", "#D5E6DC"]}
      className="flex-1"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="pt-4">
          <ApplicationHeader />
        </View>
        <TouchableOpacity
          onPress={() => router.push(`/incident/create`)}
          className="w-11/12 mx-auto bg-[#144E32] py-4 rounded-lg my-4"
        >
          <Text className="text-center text-white text-lg font-medium">
            Report Incident
          </Text>
        </TouchableOpacity>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250 }}
          >
            {/* news carosel section */}
            <NewsContainer />
            <View className="p-4">
              <Text className="text-xl text-[#144E32] font-medium py-4">
                ALL INCIDENT REPORTS
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
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
