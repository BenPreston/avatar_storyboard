import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BigEar } from "./BigEar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Ears/BigEar",
  component: BigEar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    earColor: { control: "color" },
  },
} as ComponentMeta<typeof BigEar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BigEar> = (args) => <BigEar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  earColor: "#d1c12d",
};
