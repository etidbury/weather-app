import type { Meta, StoryObj } from '@storybook/react';
import { DashboardWeatherOverview } from './dashboard-weather-overview';
import { SAMPLE_RESPONSE__WEATHER } from '../../../../../lib/sdk/weather-api';
const meta: Meta<typeof DashboardWeatherOverview> = {
  component: DashboardWeatherOverview,
  title: 'dashboard/weather-overview',
};
export default meta;
type Story = StoryObj<typeof DashboardWeatherOverview>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    weatherData: SAMPLE_RESPONSE__WEATHER,
  },
};
