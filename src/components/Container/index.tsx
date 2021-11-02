import React from "react";
import { View } from "react-native";
import { Face } from "../Face/Face";

interface ContainerProps {
  width?: number;
  height?: number;
  borderRadius?: string;
}

const Container = ({ width, height, borderRadius }: ContainerProps) => {
  return (
    <View
      style={{
        width,
        height,
        borderWidth: 5,
        borderRadius: borderRadius,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Face width={width} height={height} /> */}
    </View>
  );
};

export default Container;
