import React from "react";
import { View } from "react-native";
import CircleSVG from "./CircleSVG";

interface CircleProps {
  /**
   * What colorthe ear should be
   */
  earColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Circle = ({ earColor }: CircleProps) => {
  return (
    <View>
      <CircleSVG color={earColor} />
    </View>
  );
};
