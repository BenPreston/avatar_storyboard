import React from "react";
import { View, Text } from "react-native";
import FaceSVG from "./FaceSVG";

interface FaceProps {
  color?: string;
  width?: number;
  height?: number;
}

/**
 * Primary UI component for user interaction
 */
export const Face = ({ color, width, height }: FaceProps) => {
  return (
    <View style={{ width: "100%", height: "100%", position: "absolute" }}>
      <FaceSVG color={color} width={width} height={height} />
    </View>
  );
};
