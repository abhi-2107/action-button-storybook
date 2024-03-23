import React, { Children } from "react";

import MyButton from "./MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    display: {
      options: ["default", "icon only", "text only"],
      control: { type: "radio" },
      description: "select preference of Button type",
    },
    type: {
      options: ["default", "neutral", "reverse"],
      control: { type: "radio" },
      description: "select type of Button ",
    },

    icon: {
      description: "use any class from Phosphor icons to change icons",
    },
    size: {
      options: ["default", "sm", "xsm"],
      control: { type: "radio" },
      description: "select the size of button",
    },
    hover: {
      description: "select to see button in hover state",
    },
    children: {
      description: "write  button text here",
    },
  },
};

export const Default = {
  args: {
    children: "Action",
    type: "default",
    size: "default",
    display: "default",
    icon: "ph-user-circle",
    hover: false,
    disable: false,
  },
};
// export const size = {
//   args: {
//     size: "small",
//     children: "small button",
//   },
// };
