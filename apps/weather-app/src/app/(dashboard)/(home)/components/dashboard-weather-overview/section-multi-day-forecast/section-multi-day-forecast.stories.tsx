import type { Meta, StoryObj } from '@storybook/react';
import { SectionMultiDayForecast } from './section-multi-day-forecast';

import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

const meta: Meta<typeof SectionMultiDayForecast> = {
  component: SectionMultiDayForecast,
  title: 'dashboard/weather-overview/section-multi-day-forecast',
};
export default meta;
type Story = StoryObj<typeof SectionMultiDayForecast>;

export const Primary: Story = {
  args: {
    forecastDays: SAMPLE_RESPONSE__WEATHER.days,
  },
};
