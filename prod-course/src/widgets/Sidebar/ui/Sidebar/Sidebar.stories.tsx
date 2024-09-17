import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  //   args: {
  //     children: "Text",
  //   },
};

export const Dark: Story = {
  //   args: {
  //     children: "Text",
  //   },
  decorators: [ThemeDecorator(Theme.DARK)],
};
