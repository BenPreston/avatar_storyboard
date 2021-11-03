import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  eyeType: "Round" || "Eyeshadow" || "Eyes" || "Smiling",
  backgroundShape: "Circle" || "Square" || "Rounded",
  backgroundColor: "grey",
  skinColor: "yellow",
  earType: "Round" || "WithEarLobe",
  earRingType: "None" || "Stud" || "Hoop",
  mouthType:
    "Smile" ||
    "Nervous" ||
    "Pucker" ||
    "Frown" ||
    "Sad" ||
    "Smirk" ||
    "Suprised" ||
    "Laughing",
  hairType:
    "Fonze" ||
    "MrT" ||
    "Doug" ||
    "Danny" ||
    "Full" ||
    "Turban" ||
    "Pixie" ||
    "Bald",
  hairColor: "#654321",
  noseType: "Round" || "Pointed" || "Curved",
  eyeBrowsType: "Up" || "Down" || "EyeLashesUp" || "EyeLashesDown",
  glassesType: "Round" || "Sqaure" || "None",
  facialHairType: "None" || "Stubble" || "Beard",
  shirtType: "Collared" || "Crew" || "Open",
  shirtColor: "red",
  collarColor: "white",
};
