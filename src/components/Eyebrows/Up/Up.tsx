import React from "react";
import { View } from "react-native";
import UpSVG from "./UpSVG";

interface UpProps {
  /**
   * What colorthe ear should be
   */
  earColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Up = ({ earColor }: UpProps) => {
  return (
    <View>
      <UpSVG color={earColor} />
    </View>
  );
};
