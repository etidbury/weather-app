import type { Meta, StoryObj } from '@storybook/react';
import { WeatherDayHero } from './weather-day-hero';
import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

const meta: Meta<typeof WeatherDayHero> = {
  component: WeatherDayHero,
  title: 'dashboard/weather-overview/weather-day-hero',
};
export default meta;
type Story = StoryObj<typeof WeatherDayHero>;

export const Primary: Story = {
  args: {
    weatherData: SAMPLE_RESPONSE__WEATHER,
    tempUnit: 'celcius',
  },
};
