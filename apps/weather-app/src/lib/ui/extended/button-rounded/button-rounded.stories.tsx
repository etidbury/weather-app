import type { Meta, StoryObj } from '@storybook/react';
import { ButtonRounded } from './button-rounded';

const meta: Meta<typeof ButtonRounded> = {
  component: ButtonRounded,
  title: 'lib/extended/button-rounded',
};
export default meta;
type Story = StoryObj<typeof ButtonRounded>;

export const Primary: Story = {
  args: {},
};
