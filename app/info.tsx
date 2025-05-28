import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import step1 from "../assets/images/step1.png";
import step2 from "../assets/images/step2.png";
import step3 from "../assets/images/step3.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemeView from "../components/theme/ThemeView";
import { Image, StyleSheet, Text } from "react-native";
import thirdInfoImage from "../assets/images/thirdInfoImage.png";
import secondInfoImage from "../assets/images/secondInfoImage.png";
import firstInfoImage from "../assets/images/Wavy_Tech-27_Single-11 1.png";

const Info = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const handleNextStep = () => {
    if (step == 2) {
      router.push('/login');
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step == 0) {
      router.push('/');
    } else {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <ThemeView safe={true} className="flex-1 bg-white">
      {step === 0 && (
        <ThemeView className="w-[95%] mx-auto mt-16 ">
          <Text className="text-[#144E32] text-[18px] font-bold mt-10">
            Report Incidents Easily
          </Text>
          <Text className="text-[#33333399] font-medium mt-3">
            Quickly log issues like theft, fire or suspicious activity
            --anonymously or with your name.
          </Text>
          <Image
            source={firstInfoImage}
            className="w-[95%] h-[55vh] mx-auto mt-10 "
          />
        </ThemeView>
      )}
      {step === 1 && (
        <ThemeView className="w-[95%] mx-auto mt-16 ">
          <Text className="text-[#144E32] text-[18px] font-bold mt-10">
            Stay Alert in Real Time
          </Text>
          <Text className="text-[#33333399] font-medium mt-3">
            Quickly log issues like theft, fire or suspicious activity
            --anonymously or with your name.
          </Text>
          <Image
            source={secondInfoImage}
            className="w-[95%] h-[55vh] mx-auto mt-10 "
          />
        </ThemeView>
      )}
      {step === 2 && (
        <ThemeView className="w-[95%] mx-auto mt-16 ">
          <Text className="text-[#144E32] text-[18px] font-bold mt-10">
            Your Safety, Your choice
          </Text>
          <Text className="text-[#33333399] font-medium mt-3">
            Choose to report anonymously, track local safety, and help protect
            others
          </Text>
          <Image
            source={thirdInfoImage}
            className="w-[95%] h-[55vh] mx-auto mt-10 "
          />
        </ThemeView>
      )}
      <ThemeView className="w-[90%] mx-auto mt-20 flex flex-row items-center justify-between">
        {step === 0 && <Image source={step1} />}
        {step === 1 && <Image source={step2} />}
        {step === 2 && <Image source={step3} />}
        <ThemeView className="flex flex-row gap-5">
          <AntDesign
            onPress={handlePreviousStep}
            name="leftcircle"
            size={37}
            color="#144E322B"
          />
          <AntDesign
            onPress={handleNextStep}
            name="rightcircle"
            size={37}
            color="#144E32"
          />
        </ThemeView>
      </ThemeView>
    </ThemeView>
  );
};

export default Info;

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
