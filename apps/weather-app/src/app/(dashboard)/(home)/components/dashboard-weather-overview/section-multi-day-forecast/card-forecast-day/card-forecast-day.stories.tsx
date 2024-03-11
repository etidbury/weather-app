import type { Meta, StoryObj } from '@storybook/react';
import { CardForecastDay } from './card-forecast-day';

import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

const meta: Meta<typeof CardForecastDay> = {
  component: CardForecastDay,
  title:
    'dashboard/weather-overview/section-multi-day-forecast/card-forecast-day/CardForecastDay',
};
export default meta;
type Story = StoryObj<typeof CardForecastDay>;

const SAMPLE_WEATHER_CONDITION = SAMPLE_RESPONSE__WEATHER.days[0];

export const Primary: Story = {
  args: {
    weatherCondition: SAMPLE_WEATHER_CONDITION,
  },
};
