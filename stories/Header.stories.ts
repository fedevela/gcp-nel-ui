import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../src/components/Header";

const headerStory: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn: StoryObj<typeof Header> = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: StoryObj<typeof Header> = {};

export default headerStory;
