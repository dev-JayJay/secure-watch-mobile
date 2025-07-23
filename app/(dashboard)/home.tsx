import {
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
import { Link, router } from "expo-router";
import Location from "../../components/location";
import ThemeView from "../../components/theme/ThemeView";
import mapImage from "../../assets/images/Basemap image.png";
import { incidents } from "../../constants/auth-choice";
import { IncedentComponent } from "../../components/spacer";

const Home = () => {
  return (
    <ThemeView safe={true} className="bg-white/50 flex-1">
      <ThemeView className="w-11/12 mx-auto mb-5">
        <Location />
      </ThemeView>
      <View className="flex-1">
        <FlatList
          data={incidents.slice(0, 5)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/details/${item.id}`)}
              className="my-1.5"
            >
              <IncedentComponent {...item} />
            </TouchableOpacity>
          )}
          ListHeaderComponent={
            <>
              <ThemeView className="w-11/12 relative mx-auto h-[60vh] border border-[#00000057] rounded-2xl overflow-hidden">
                <Image
                  source={mapImage}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </ThemeView>
              <TextInput
                placeholder="What are you reporting Today?"
                className="w-[94%] my-5 mx-auto px-7 py-5 text-xl border border-[#00000057] rounded-lg"
              />
              <Text className="text-[#B0B0B0] text-lg font-bold px-4 my-4">
                RECENT REPORTS
              </Text>
            </>
          }
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
    </ThemeView>
  );
};

export default Home;

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
