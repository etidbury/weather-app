import type { Meta, StoryObj } from '@storybook/react';
import { OptionToggleTempUnit } from './option-toggle-temp-unit';

const meta: Meta<typeof OptionToggleTempUnit> = {
  component: OptionToggleTempUnit,
  title: 'dashboard/weather-overview/nav-bar/OptionToggleTempUnit',
};
export default meta;
type Story = StoryObj<typeof OptionToggleTempUnit>;

export const Primary: Story = {
  args: {
    searchParams: new URLSearchParams(''),
  },
};
