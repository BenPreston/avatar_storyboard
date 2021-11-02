import React from "react";
import { View } from "react-native";

import Container from "./Container";
import { Face } from "./Face/Face";
import { BigEar } from "./Ears/BigEar/BigEar";
import { SmallEar } from "./Ears/SmallEar/SmallEar";

interface AvatarProps {
  skinColor?: string;
  earSize?: "small" | "big";
  shape?: "circle" | "rounded" | "square";
  shapeSize?: number;
}

export const Avatar = ({
  skinColor,
  earSize,
  shape,
  shapeSize,
  ...props
}: AvatarProps) => {
  // Background shape
  let borderRadius;
  switch (shape) {
    case "circle": {
      borderRadius = "100%";
      break;
    }
    case "rounded": {
      borderRadius = "6px";
      break;
    }
    case "square": {
      borderRadius = 0;
      break;
    }
  }

  return (
    <Container width={shapeSize} height={shapeSize} borderRadius={borderRadius}>
      {/* <Face width={shapeSize} height={shapeSize} color={skinColor} />
      {earSize === "small" ? (
        <BigEar earColor={skinColor} />
      ) : (
        <SmallEar earColor={skinColor} />
      )} */}
    </Container>
  );

  // const styles = StyleSheet.create({
  //   container: {
  //     borderRadius: { borderRadius },
  //   },
  // });
};
