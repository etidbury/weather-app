import type { Meta, StoryObj } from '@storybook/react';
import { OptionToggleTheme } from './option-toggle-theme';

const meta: Meta<typeof OptionToggleTheme> = {
  component: OptionToggleTheme,
  title: 'dashboard/weather-overview/nav-bar/OptionToggleTheme',
};
export default meta;
type Story = StoryObj<typeof OptionToggleTheme>;

export const Primary: Story = {
  args: {
    searchParams: new URLSearchParams(''),
  },
};
