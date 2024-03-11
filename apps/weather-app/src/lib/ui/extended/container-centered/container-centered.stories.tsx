import type { Meta, StoryObj } from '@storybook/react';
import { ContainerCentered } from './container-centered';

const meta: Meta<typeof ContainerCentered> = {
  component: ContainerCentered,
  title: 'lib/extended/container-centered',
};
export default meta;
type Story = StoryObj<typeof ContainerCentered>;

export const Primary: Story = {
  args: {},
};
