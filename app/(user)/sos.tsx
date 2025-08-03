import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

type Coordinates = {
  latitude: number;
  longitude: number;
};

type AddressInfo = {
  city?: string | null;
  region?: string | null;
  country?: string | null;
  street?: string | null;
  name?: string | null;
};

export default function SosScreen() {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [address, setAddress] = useState<AddressInfo | null>(null);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetLocation = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location access is required.");
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      };
      setLocation(coords);

      // 🧠 Reverse Geocode
      const reverseInfo = await Location.reverseGeocodeAsync(coords);
      if (reverseInfo.length > 0) {
        const place = reverseInfo[0];
        setAddress({
          city: place.city,
          region: place.region,
          country: place.country,
          street: place.street || "",
          name: place.name || "",
        });
      }
    } catch (err) {
      Alert.alert("Error", "Failed to get location.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendSOS = () => {
    if (!location) {
      Alert.alert("Location Required", "Please get your location first.");
      return;
    }

    Alert.alert(
      "SOS Sent",
      `Location: ${address?.city}, ${address?.region}, ${address?.country}\nCoordinates: ${location.latitude}, ${location.longitude}\nMessage: ${message}`
    );

    setMessage("");
  };

  return (
    <LinearGradient colors={["#D94D4D", "#FBCACA"]} className="flex-1">
      <SafeAreaView className="flex-1 px-6 py-8">
        <Text className="text-3xl font-extrabold text-white mb-6 text-center">
          Emergency SOS
        </Text>

        <View className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <TouchableOpacity
            onPress={handleGetLocation}
            className="bg-red-600 rounded-xl py-3 flex-row justify-center items-center mb-4"
            activeOpacity={0.9}
          >
            <Ionicons
              name="location-outline"
              size={20}
              color="white"
              className="mr-2"
            />
            <Text className="text-white font-bold text-lg">
              Get Current Location
            </Text>
          </TouchableOpacity>

          {location && address && (
            <View className="mb-4">
              <Text className="text-sm text-gray-600">
                Your Current Location:
              </Text>
              <Text className="text-base font-medium text-gray-800">
                {address.name} {address.street}, {address.city},{" "}
                {address.region}, {address.country}
              </Text>
              <Text className="text-sm text-gray-500 mt-1">
                Lat: {location.latitude.toFixed(4)}, Lng:{" "}
                {location.longitude.toFixed(4)}
              </Text>
            </View>
          )}

          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-800"
            placeholder="Optional emergency message..."
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
          />
        </View>

        <TouchableOpacity
          onPress={handleSendSOS}
          className="bg-red-700 rounded-full py-4 w-full"
          activeOpacity={0.9}
        >
          <Text className="text-white font-extrabold text-xl text-center uppercase">
            Send SOS
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
