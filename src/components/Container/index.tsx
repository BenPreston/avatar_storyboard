import React from "react";
import { View } from "react-native";
import { Face } from "../Face/Face";

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = ({ width, height }: ContainerProps) => {
  return (
    <View style={{ width, height }}>
      <Face />
    </View>
  );
};

export default Container;
