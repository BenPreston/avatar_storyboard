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
  hairType:
    | "Fonze"
    | "MrT"
    | "Doug"
    | "Danny"
    | "Full"
    | "Turban"
    | "Pixie"
    | "Bald";
  hairColor: string;
  noseType: "Round" | "Pointed" | "Curved";
  eyeBrowsType: "Up" | "Down" | "EyeLashesUp" | "EyeLashesDown";
  glassesType: "None" | "Round" | "Square";
  facialHairType: "None" | "Stubble" | "Beard";
  shirtType: "Collared" | "Crew" | "Open";
  shirtColor: string;
  collarColor: string;
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
  glassesType,
  facialHairType,
  shirtType,
  shirtColor,
  collarColor,
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
        glassesType={glassesType}
        facialHairType={facialHairType}
        shirtType={shirtType}
        shirtColor={shirtColor}
        collarColor={collarColor}
      />
    </View>
  );
};
