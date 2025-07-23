import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ThemeView from "../../components/theme/ThemeView";
import Loaction from "../../components/location";
import { incidents } from "../../constants/auth-choice";
import { IncedentComponent } from "../../components/spacer";

const Incident = () => {
  const router = useRouter();

  return (
    <ThemeView safe={true} className="flex-1 bg-white dark:bg-gray-900">
      {/* Location Header */}
      <View className="w-11/12 mx-auto mt-4 mb-2">
        <Loaction />
      </View>

      {/* Main Content */}
      <FlatList
        ListHeaderComponent={
          <View className="w-full px-4">
            {/* Title */}
            <View className="bg-[#144E32] rounded-xl py-4 shadow-md mb-5">
              <Text className="text-white text-xl font-semibold text-center">
                Report an Incident
              </Text>
            </View>

            {/* Search Bar */}
            <View className="flex-row items-center border border-[#ccc] rounded-xl overflow-hidden mb-5">
              <TextInput
                placeholder="Search incident or location..."
                className="flex-1 px-4 py-3 text-base text-gray-800"
                placeholderTextColor="#888"
              />
              <TouchableOpacity className="bg-[#144E32] px-5 py-3 justify-center items-center">
                <Text className="text-white font-semibold text-sm">Search</Text>
              </TouchableOpacity>
            </View>

            {/* Section Label */}
            <Text className="text-[#555] text-lg font-semibold mb-3 px-1">
              Recent Reports
            </Text>
          </View>
        }
        data={incidents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/details/${item.id}`)}
            activeOpacity={0.8}
            className="px-2 pb-2"
          >
            <IncedentComponent {...item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      />
    </ThemeView>
  );
};

export default Incident;
