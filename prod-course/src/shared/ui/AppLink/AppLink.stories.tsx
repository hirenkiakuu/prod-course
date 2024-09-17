import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "widget/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "TEXT",
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "TEXT",
  },
};
