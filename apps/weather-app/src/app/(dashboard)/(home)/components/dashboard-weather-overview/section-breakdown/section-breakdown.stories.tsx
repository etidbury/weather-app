import type { Meta, StoryObj } from '@storybook/react';
import { SectionBreakdown } from './section-breakdown';
import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

const meta: Meta<typeof SectionBreakdown> = {
  component: SectionBreakdown,
  title: 'dashboard/weather-overview/section-breakdown',
};
export default meta;
type Story = StoryObj<typeof SectionBreakdown>;

export const Primary: Story = {
  args: {
    tempUnit: 'celcius',
    weatherData: SAMPLE_RESPONSE__WEATHER,
  },
};
