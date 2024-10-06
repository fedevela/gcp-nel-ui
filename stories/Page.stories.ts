import { expect, userEvent, within } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { Page } from "../src/components/Page";

const PageStory: Meta<typeof Page> = {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut: StoryObj<typeof Page> = {};

export const LoggedIn: StoryObj<typeof Page> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export default PageStory;
