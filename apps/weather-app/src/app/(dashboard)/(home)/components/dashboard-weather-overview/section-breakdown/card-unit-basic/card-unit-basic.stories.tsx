import type { Meta, StoryObj } from '@storybook/react';
import { CardUnitBasic } from './card-unit-basic';

const meta: Meta<typeof CardUnitBasic> = {
  component: CardUnitBasic,
  title: 'dashboard/weather-overview/section-breakdown/CardUnitBasic',
};
export default meta;
type Story = StoryObj<typeof CardUnitBasic>;

export const Primary: Story = {
  args: {
    title: 'Max temp.',
    children: '25°C',
  },
};
