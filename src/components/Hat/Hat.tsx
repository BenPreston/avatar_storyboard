import React from "react";
import { View } from "react-native";
import BeanieSVG from "./BeanieSVG";

interface HatProps {}

export const Hat = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: "34%",
        height: "85%",
        left: "22%",
        width: "63%",
      }}
    >
      <BeanieSVG color={"green"} />
    </View>
  );
};
