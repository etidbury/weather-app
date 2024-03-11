import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './side-bar';
import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  title: 'dashboard/weather-overview/side-bar',
};
export default meta;
type Story = StoryObj<typeof SideBar>;

export const Primary: Story = {
  args: {
    tempUnit: 'celcius',
    searchParams: new URLSearchParams(''),
    weatherData: SAMPLE_RESPONSE__WEATHER,
  },
};
