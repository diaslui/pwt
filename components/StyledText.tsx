import { Text, TextProps } from "./Themed";
import { getColorValue, ColorPalleType } from "@/constants/Colors";

interface ExtendedTextProps extends TextProps {
  colorPattern?: keyof ColorPalleType;
}

export const MonoText: React.FC<ExtendedTextProps> = ({ colorPattern, ...props }) => (
  <Text
    {...props}
    style={[
      props.style,
      { fontFamily: 'MonaSans', color: colorPattern ? getColorValue(colorPattern) : undefined },
    ]}
  />
);

export const MonoTextBold: React.FC<ExtendedTextProps> = ({ colorPattern, ...props }) => (
  <Text
    {...props}
    style={[
      props.style,
      { fontFamily: 'MonaSansBold', color: colorPattern ? getColorValue(colorPattern) : undefined },
    ]}
  />
);