import type { Meta, StoryObj } from '@storybook/react';
import { TextTempUnit } from './text-temp-unit';

const meta: Meta<typeof TextTempUnit> = {
  component: TextTempUnit,
  title: 'lib/extended/text-temp-unit',
};
export default meta;
type Story = StoryObj<typeof TextTempUnit>;

export const Primary: Story = {
  args: {},
};
