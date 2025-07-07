import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import ThemeView from "../../components/theme/ThemeView";
import Loaction from "../../components/location";
import { incidents } from "../../constants/auth-choice";
import { IncedentComponent } from "../../components/spacer";

const Incident = () => {
  const router = useRouter();
  return (
    <ThemeView safe={true} className="bg-white/50 flex-1">
      <ThemeView className="w-[90%] mx-auto mt-10 mb-5">
        <Loaction />
      </ThemeView>
      <ThemeView className="flex-1 flex flex-col justify-between gap-2">
        <FlatList
          ListHeaderComponent={
            <View>
              <ThemeView className="w-11/12 mx-auto py-3 bg-[#144E32B8] rounded-lg shadow-md">
                <Text className="text-white text-center text-xl font-bold">
                  Report Incident
                </Text>
              </ThemeView>
              <View className="w-11/12 mx-auto my-5 flex flex-row items-center gap-0  border border-[#00000057] overflow-hidden rounded-md ">
                <TextInput
                  placeholder="Search incident and location..."
                  className="px-4 py-4 text-xl outline-none rounded-lg h-full"
                />
                <TouchableOpacity className="bg-[#144E32B8] px-4 py-4 h-full">
                  <Text className="text-white text-sm font-bold">Search</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-[#B0B0B0] text-lg font-bold px-4 my-4">ALL INCIDENT REPORTS</Text>
            </View>
          }
          data={incidents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/details/${item.id}`)}
              activeOpacity={0.7}
              className="my-1.5"
            >
              <IncedentComponent {...item} />
            </TouchableOpacity>
          )}
        />
      </ThemeView>
    </ThemeView>
  );
};

export default Incident;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 40,
    fontWeight: 600,
  },
});
