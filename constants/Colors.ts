import { useColorScheme } from "@/components/useColorScheme";

/** @personal wallet -> https://github.com/luiisp/pwt
 * Color Pallet types
 *
 * (main,actions || *) ---> ColorPallet
 *
 */

type MainColorPallet = {
  main1: string;
  main2: string;
  main3: string;
};

type MainLightColorPallet = {
  mainLight1: string;
  mainLight2: string;
  mainLight3: string;
};

type MainDarkColorPallet = {
  MainDark1: string;
  MainDark2: string;
  MainDark3: string;
};

type actionColors = {
  error: string;
  warn: string;
  success: string;
};

export type ColorPalleType = {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  error: string;
  warn: string;
  success: string;
} & MainColorPallet &
  actionColors & MainLightColorPallet  & MainDarkColorPallet;

type Colors = {
  light: ColorPalleType;
  dark: ColorPalleType;
};

// Colors (light, dark) -> ColorPallet
// ---------------------------------------------




const tintColorLight = "#641EE8";
const tintColorDark = "#fff";

const mainColor: MainColorPallet = {
  main1: "#641EE8",
  main2: "#0094ED",
  main3: "#FF327C",
};

const mainColorDark: MainDarkColorPallet = {
  MainDark1: "#3C0D5C",
  MainDark2: "#0066A3",
  MainDark3: "#CC1952",
};

const mainColorLight: MainLightColorPallet = {
  mainLight1: "#B39DDB",
  mainLight2: "#90CAF9",
  mainLight3: "#F48FB1",
};

const actionColorsLight: actionColors = {
  error: "#ff0000",
  warn: "#ffcc00",
  success: "#00cc00",
};

const actionColorsDark: actionColors = {
  error: "#ff0000",
  warn: "#ffcc00",
  success: "#00cc00",
};

const colors: Colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    ...mainColor,
    ...mainColorLight,
    ...mainColorDark,
    ...actionColorsLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    ...mainColor,
    ...mainColorLight,
    ...actionColorsDark,
    ...mainColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

const getColorValue = (colorPattern: keyof ColorPalleType) => {
  const colorScheme = useColorScheme() || "light";
  if (!colorScheme || !colorPattern) return undefined;
  return colors[colorScheme][colorPattern];
};

export { getColorValue };
export default colors;
