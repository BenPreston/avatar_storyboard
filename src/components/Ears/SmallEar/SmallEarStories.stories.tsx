import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SmallEar } from "./SmallEar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Ears/SmallEar",
  component: SmallEar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    earColor: { control: "color" },
  },
} as ComponentMeta<typeof SmallEar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SmallEar> = (args) => (
  <SmallEar {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  earColor: "#d1c12d",
};
