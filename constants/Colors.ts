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
  actionColors;

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
  main2: "#F5F5F5",
  main3: "#E5E5E5",
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
    ...actionColorsLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    ...mainColor,
    ...actionColorsDark,
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
