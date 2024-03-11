import type { Meta, StoryObj } from '@storybook/react';
import { OptionToggleTempUnit } from './option-toggle-temp-unit';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof OptionToggleTempUnit> = {
  component: OptionToggleTempUnit,
  title: 'OptionToggleTempUnit',
};
export default meta;
type Story = StoryObj<typeof OptionToggleTempUnit>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to OptionToggleTempUnit!/gi)).toBeTruthy();
  },
};
