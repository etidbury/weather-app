import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './nav-bar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'dashboard/weather-overview/nav-bar/NavBar',
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: {
    searchParams: new URLSearchParams(''),
  },
};
