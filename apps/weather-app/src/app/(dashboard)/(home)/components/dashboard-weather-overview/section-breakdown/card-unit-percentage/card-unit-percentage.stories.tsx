import type { Meta, StoryObj } from '@storybook/react';
import { CardUnitPercentage } from './card-unit-percentage';

const meta: Meta<typeof CardUnitPercentage> = {
  component: CardUnitPercentage,
  title: 'dashboard/weather-overview/section-breakdown/CardUnitPercentage',
};
export default meta;
type Story = StoryObj<typeof CardUnitPercentage>;

export const Primary: Story = {
  args: {
    title: 'Max temp.',
    percentageValue: 0.4,
  },
};
