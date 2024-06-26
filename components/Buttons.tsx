import { Pressable } from "react-native";
import { Text } from "./Themed";
import { MonoTextBold } from "./StyledText";
import { getColorValue, ColorPalleType } from "@/constants/Colors";

type btnType =
  | "primary"
  | "secondary"
  | "warn"
  | "danger"
  | "success"
  | "info"
  | "light"
  | "dark"
  | "text"
  | "main1"
  | "main2"
  | "main3";

interface props {
  text: string;
  btnType: btnType;
  icon?: string;
}

export const Button = (props: props) => {
  return (
    <Pressable
    style={({ pressed }) => [
        {
          backgroundColor: getColorValue('main1'),
          paddingHorizontal: 29,
          paddingVertical: 13,
          borderRadius: 17,
          borderWidth: 1.7,
          borderColor: getColorValue('mainLight1'),
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: getColorValue('MainDark1'),
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
        colorPattern="background"
      >
        {props.text}
      </MonoTextBold>
    </Pressable>
  );
};
