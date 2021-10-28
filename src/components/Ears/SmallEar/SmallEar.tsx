import React from "react";
import { View } from "react-native";
import SmallEarSVG from "./SmallEarSVG";

interface SmallEarProps {
  /**
   * What colorthe ear should be
   */
  earColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const SmallEar = ({ earColor }: SmallEarProps) => {
  return (
    <View>
      <SmallEarSVG color={earColor} />
    </View>
  );
};
