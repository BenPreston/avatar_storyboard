import React from "react";
import { View } from "react-native";
import { Face } from "../Face/Face";
import { BigEar } from "../Ears/BigEar/BigEar";
import { SmallEar } from "../Ears/SmallEar/SmallEar";
import { Hat } from "../Hat/Hat";

interface ContainerProps {
  width?: number;
  height?: number;
  borderRadius?: string;
  backgroundColor: string;
  skinColor: string;
}

const Container = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  skinColor,
  earSize,
}: ContainerProps) => {
  return (
    <View
      style={{ position: "absolute", bottom: 0, width: "100%", height: "90%" }}
    >
      <View
        style={{
          width,
          height,
          borderWidth: 5,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Hat />
        <Face width={width} height={height} />
        {/* {earSize === "small" ? (
        <BigEar earColor={skinColor} />
      ) : (
        <SmallEar earColor={skinColor} />
      )} */}
      </View>
    </View>
  );
};

export default Container;
