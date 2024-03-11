import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight } from './icon-arrow-right';

const meta: Meta<typeof IconArrowRight> = {
  component: IconArrowRight,
  title: 'icon/icon-arrow-right',
};
export default meta;
type Story = StoryObj<typeof IconArrowRight>;

export const Primary: Story = {
  args: {},
};
