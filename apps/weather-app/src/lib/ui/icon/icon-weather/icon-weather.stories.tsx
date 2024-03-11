import type { Meta, StoryObj } from '@storybook/react';
import { IconWeather } from './icon-weather';

const meta: Meta<typeof IconWeather> = {
  component: IconWeather,
  title: 'icon/icon-weather',
};
export default meta;
type Story = StoryObj<typeof IconWeather>;

export const Primary: Story = {
  args: {},
};
