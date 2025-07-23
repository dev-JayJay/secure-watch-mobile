import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemeView from "../components/theme/ThemeView";

import step1 from "../assets/images/step1.png";
import step2 from "../assets/images/step2.png";
import step3 from "../assets/images/step3.png";
import firstInfoImage from "../assets/images/Wavy_Tech-27_Single-11 1.png";
import secondInfoImage from "../assets/images/secondInfoImage.png";
import thirdInfoImage from "../assets/images/thirdInfoImage.png";

const Info = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const data = [
    {
      title: "Report Incidents Easily",
      description:
        "Quickly log issues like theft, fire or suspicious activity — anonymously or with your name.",
      image: firstInfoImage,
      stepImage: step1,
    },
    {
      title: "Stay Alert in Real Time",
      description:
        "Receive instant notifications about incidents happening nearby and stay safe.",
      image: secondInfoImage,
      stepImage: step2,
    },
    {
      title: "Your Safety, Your Choice",
      description:
        "Choose to report anonymously, track local safety, and help protect others.",
      image: thirdInfoImage,
      stepImage: step3,
    },
  ];

  const handleNextStep = () => {
    if (step === data.length - 1) {
      router.push("/login");
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step === 0) {
      router.push("/");
    } else {
      setStep(step - 1);
    }
  };

  return (
    <ThemeView safe={true} className="flex-1 bg-gray-50">
      <View className="flex-1 px-6 pt-16">
        {/* Content Card */}
        <View className="bg-white rounded-2xl shadow-lg p-6 flex-1 justify-center">
          <Text className="text-[#144E32] text-2xl font-bold mb-4">
            {data[step].title}
          </Text>
          <Text className="text-gray-600 text-base mb-8">{data[step].description}</Text>
          <Image
            source={data[step].image}
            className="w-full h-[55vh] rounded-xl"
            resizeMode="contain"
          />
        </View>

        {/* Stepper and navigation */}
        <View className="flex-row justify-between items-center mt-12 mb-6">
          <Image source={data[step].stepImage} style={{ width: 80, height: 16 }} />

          <View className="flex-row space-x-6">
            <TouchableOpacity
              onPress={handlePreviousStep}
              className="p-2"
              activeOpacity={0.7}
            >
              <AntDesign
                name="leftcircle"
                size={38}
                color={step === 0 ? "#A3BFA1" : "#144E32"}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNextStep}
              className="p-2"
              activeOpacity={0.7}
            >
              <AntDesign name="rightcircle" size={38} color="#144E32" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ThemeView>
  );
};

export default Info;
