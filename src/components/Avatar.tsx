import React from "react";
import { View } from "react-native";

import { BigEar } from "./Ears/BigEar/BigEar";
import { SmallEar } from "./Ears/SmallEar/SmallEar";

interface AvatarProps {
  skinColor?: string;
  earSize?: "small" | "big";
}

export const Avatar = ({ skinColor, earSize, ...props }: AvatarProps) => {
  return (
    <View>
      {earSize === "small" ? (
        <BigEar earColor={skinColor} />
      ) : (
        <SmallEar earColor={skinColor} />
      )}
    </View>
  );
};
