import React from "react";
import { View } from "react-native";
import BigEarSVG from "./BigEarSVG";

interface BigEarProps {
  /**
   * What colorthe ear should be
   */
  earColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BigEar = ({ earColor }: BigEarProps) => {
  return (
    <View>
      <BigEarSVG color={earColor} />
    </View>
  );
};
