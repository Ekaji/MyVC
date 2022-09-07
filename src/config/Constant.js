import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const CLOTH_COMPONENET_HEIGHT = height / 2.3 - 32;
export const CLOTH_COMPONENET_WIDTH = width / 2.2 - 20;

export const ImageSet = {
  dropDown: require("../assets/dropdown.png"),
  eyeOpen: require("../assets/eye_open_black.png"),
  eyeClose: require("../assets/eye_closed_black.png"),
  plus: require("../assets/plus_Icon_white.png"),
  camera_thin: require("../assets/camera_black_outline_thin.png"),
  camera_bold: require("../assets/camera_black_outline_bold.png"),
  gallery_white: require("../assets/background_image.png"),
  search_white: require("../assets/search_white.png"),
  search_black: require("../assets/search_black.png"),
  upc_black: require("../assets/upc_black.png"),
  google_icon: require("../assets/google.png"),
  apple_icon: require("../assets/apple.png"),
  phone_icon: require("../assets/phone_white.png"),
  back_icon: require("../assets/back_black.png"),
  shirt_black: require("../assets/shirt_black.png"),
  shirt_white: require("../assets/shirt_white.png"),
  shirt_outline_white: require("../assets/shirt_outline_white.png"),
  user_white: require("../assets/user_white.png"),
  user_black: require("../assets/user_black.png"),
  wardrobe_white: require("../assets/wardrobe_white.png"),
  wardrobe_black: require("../assets/wardrobe_black.png"),
  filter_black: require("../assets/filter_black.png"),
  threedots_black: require("../assets/threedots_black.png"),
  cloth_example_image: require("../assets/cloth_example_image.png"),
  cancel_black: require("../assets/cancel_black.png"),
  cancel_bold_black: require("../assets/cancel_bold_black.png"),
};

export const Colors = {
  white: "#fff",
  black: "#04040B",
  grey: "#e2e8f0",
  gray500: "#767373",
  gray600: "#202021",
  gray700: "#2d3748",
  lightGray: "#525252",
  red: "#BF2C31",
  verylightGray: "#ECECEC",
  categorylightGray: "#F3F3F3",
  weirdWhite: "#FAFAFA",
};

export const USER_TOKEN = "USER_TOKEN";
