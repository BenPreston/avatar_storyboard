import React from "react";
import { View } from "react-native";
import AvatarSVG from "./AvatarSVG";

interface AvatarProps {
  eyeType?: "Round" | "Eyeshadow" | "Eyes" | "Smiling";
  backgroundShape: "Circle" | "Square" | "Rounded";
  backgroundColor: string;
}

export const Avatar = ({
  eyeType,
  backgroundShape,
  backgroundColor,
  ...props
}: AvatarProps) => {
  return (
    <View>
      <AvatarSVG
        eyeType={eyeType}
        backgroundShape={backgroundShape}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};
