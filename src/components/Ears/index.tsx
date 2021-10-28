import React, { Fragment } from "react";

import { SmallEar } from "./SmallEar/SmallEar";
import { BigEar } from "./BigEar/BigEar";

interface EarProps {
  earColor?: string;
  earSize?: string;
}

export const Ear = ({ earColor, earSize }: EarProps) => {
  {
    earSize === "small" ? (
      <SmallEar earColor={earColor} />
    ) : (
      <BigEar earColor={earColor} />
    );
  }
};
