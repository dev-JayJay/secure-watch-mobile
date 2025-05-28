import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

interface login_choice_props {
  choice: string;
  text: string;
  image: ImageSourcePropType | undefined;
  path: string;
}
export type LoginChoiceArray = login_choice_props[];
