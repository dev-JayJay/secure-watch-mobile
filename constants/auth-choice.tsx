import { MaterialIcons } from "@expo/vector-icons";
import { LoginChoiceArray } from "../types/constants";
import type { ComponentProps } from "react";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

type Incident = {
  id: number;
  type: string;
  location: string;
  icon: MaterialIconName;
  color: string;
};

export const login_choice: LoginChoiceArray = [
  {
    choice: "Google",
    text: "Continue with Google",
    image: require("../assets/images/flat-color-icons_google.png"),
    path: "",
  },
  {
    choice: "Facebook",
    text: "Continue with Facebook",
    image: require("../assets/images/logos_facebook.png"),
    path: "",
  },
  {
    choice: "Apple",
    text: "Continue with Apple",
    image: require("../assets/images/ic_round-apple.png"),
    path: "",
  },
];

export const incidents: Incident[] = [
  {
    id: 1,
    type: "Fire Incident",
    location: "Wuse, Zone 2",
    icon: "local-fire-department",
    color: "red",
  },
  {
    id: 2,
    type: "Car Accident",
    location: "Independence Avenue, Abuja",
    icon: "car-crash", // FontAwesome5
    color: "black",
  },
  {
    id: 3,
    type: "Flood",
    location: "Constitution Avenue, Umboxo Street, Abuja",
    icon: "water-damage",
    color: "blue",
  },
  {
    id: 4,
    type: "Theft",
    location: "No.24 Akalu Street, Jabi, Abuja",
    icon: "security",
    color: "gray",
  },
  {
    id: 5,
    type: "Fire Incident",
    location: "Wuse, Zone 2",
    icon: "local-fire-department",
    color: "black",
  },
  {
    id: 6,
    type: "Power Outage",
    location: "Gwarinpa Estate, Abuja",
    icon: "power-off", // FontAwesome5
    color: "orange",
  },
  {
    id: 7,
    type: "Building Collapse",
    location: "Mabushi District, Abuja",
    icon: "apartment", // MaterialIcons
    color: "brown",
  },
  {
    id: 8,
    type: "Road Blockage",
    location: "Aminu Kano Crescent, Wuse II",
    icon: "block", // FontAwesome5
    color: "darkgray",
  },
  {
    id: 9,
    type: "Armed Robbery",
    location: "Area 11, Garki, Abuja",
    icon: "warning", // MaterialIcons
    color: "darkred",
  },
  {
    id: 10,
    type: "Gas Leak",
    location: "Banex Plaza, Wuse II, Abuja",
    icon: "whatshot", // MaterialIcons
    color: "orangered",
  },
  {
    id: 11,
    type: "Medical Emergency",
    location: "Asokoro General Hospital, Abuja",
    icon: "local-hospital", // MaterialIcons
    color: "crimson",
  },
  {
    id: 12,
    type: "Traffic Jam",
    location: "Airport Road, Abuja",
    icon: "traffic", // MaterialIcons
    color: "tomato",
  },
];
