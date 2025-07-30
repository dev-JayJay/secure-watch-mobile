import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function NewsContainer() {
  const data = [
    {
      date: "July 7, 2025 08:15am",
      title: "Breaking News",
      image:
        "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400",
    },
    {
      date: "July 7, 2025 08:15am",
      title: "World Update",
      image:
        "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400",
    },
    {
      date: "July 7, 2025 08:15am",
      title: "Tech Today",
      image:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400",
    },
  ];

  return (
    <View>
      <View className="flex flex-row justify-between">
        <Text className="text-xl text-[#144E32] font-medium px-4">
          Nearby Alerts
        </Text>
        <Text className="text-base text-[#144E32] font-medium px-4 underline">
          See more
        </Text>
      </View>
      <View>
        <Carousel
          width={width}
          height={210}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1100}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: "#fff",
                elevation: 4,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                width: width * 0.94,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 150 }}
                resizeMode="cover"
              />
              <View style={{ padding: 10 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#144E32" }}
                >
                  {item.title}
                </Text>
                <Text className="font-medium">{item.date}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
