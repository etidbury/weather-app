import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'lib/common/Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};
