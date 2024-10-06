import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/components/Button";

const ButtonStory: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: "Button",
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: "small",
    label: "Button",
  },
};

export default ButtonStory;
