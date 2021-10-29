import React from "react";
import { View, Text } from "react-native";
import FaceSVG from "./FaceSVG";

interface FaceProps {
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Face = ({ color }: FaceProps) => {
  return (
    <View>
      <FaceSVG color={color} />
    </View>
  );
};
