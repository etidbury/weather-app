import type { Meta, StoryObj } from '@storybook/react';
import { LoadingIndicator } from './loading-indicator';

const meta: Meta<typeof LoadingIndicator> = {
  component: LoadingIndicator,
  title: 'lib/extended/loading-indicator',
};
export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

export const Primary: Story = {
  args: {},
};
