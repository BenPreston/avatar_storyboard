import React from "react";
import { View } from "react-native";
import AvatarSVG from "./AvatarSVG";

interface AvatarProps {
  eyeType?: "Round" | "Eyeshadow" | "Eyes" | "Smiling";
  backgroundShape: "Circle" | "Square" | "Rounded";
  backgroundColor: string;
  skinColor: string;
  earType: "Round" | "WithEarLobe";
  earRingType: "None" | "Stud" | "Hoop";
  mouthType:
    | "Nervous"
    | "Pucker"
    | "Frown"
    | "Sad"
    | "Smirk"
    | "Smile"
    | "Suprised"
    | "Laughing";
  hairType: "Fonze" | "MrT" | "Doug" | "Danny" | "Full" | "Turban" | "Pixie";
  hairColor: string;
  noseType: "Round" | "Pointed" | "Curved";
  eyeBrowsType: "Up" | "Down" | "EyeLashesUp" | "EyeLashesDown";
}

export const Avatar = ({
  eyeType,
  backgroundShape,
  backgroundColor,
  skinColor,
  earType,
  earRingType,
  mouthType,
  hairType,
  hairColor,
  noseType,
  eyeBrowsType,
  ...props
}: AvatarProps) => {
  return (
    <View>
      <AvatarSVG
        eyeType={eyeType}
        backgroundShape={backgroundShape}
        backgroundColor={backgroundColor}
        skinColor={skinColor}
        earType={earType}
        earRingType={earRingType}
        mouthType={mouthType}
        hairType={hairType}
        hairColor={hairColor}
        noseType={noseType}
        eyeBrowsType={eyeBrowsType}
      />
    </View>
  );
};
