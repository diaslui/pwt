import { Pressable } from "react-native";
import { Text } from "./Themed";
import { MonoTextBold } from "./StyledText";
import { getColorValue, ColorPalleType } from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import {MaterialIcons} from "@expo/vector-icons";



interface props {
  text: string;
  backgroundColor?: keyof ColorPalleType;
  borderColor?: keyof ColorPalleType;
  shadowColor?: keyof ColorPalleType;
  icon?: string;
}

export const Button = (props: props) => {
  const colorScheme = useColorScheme() || "light";
  return (
    <Pressable
    style={({ pressed }) => [
        {
          backgroundColor: props.backgroundColor ? getColorValue(props.backgroundColor) : getColorValue('main1'),
          paddingHorizontal: 29,
          paddingVertical: 13,
          borderRadius: 17,
          borderWidth: 1.2,
          borderColor: props.borderColor ? getColorValue(props.borderColor) : getColorValue('main1'),
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: props.shadowColor ? getColorValue(props.shadowColor) : getColorValue('main1'),
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          transform: pressed ? [{ scale: 0.99 }] : [{ scale: 1 }],
        },
        
      ]}
    >
    
      <MonoTextBold
        style={{
          fontSize: 19,
        }}
        colorPattern={colorScheme == "dark" ? "text" : "background"}
      >
        {props.text}
      </MonoTextBold>
    </Pressable>
  );
};
