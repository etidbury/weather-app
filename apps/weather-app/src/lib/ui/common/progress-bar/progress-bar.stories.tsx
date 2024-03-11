import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './progress-bar';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'lib/common/ProgressBar',
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {},
};
