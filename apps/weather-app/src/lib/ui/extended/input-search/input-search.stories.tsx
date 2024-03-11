import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from './input-search';

const meta: Meta<typeof InputSearch> = {
  component: InputSearch,
  title: 'lib/extended/input-search',
};
export default meta;
type Story = StoryObj<typeof InputSearch>;

export const Primary: Story = {
  args: {
    searchParams: new URLSearchParams(''),
  },
};
