import type { Meta, StoryObj } from '@storybook/react';
import { WeatherDayHero } from './weather-day-hero';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof WeatherDayHero> = {
  component: WeatherDayHero,
  title: 'WeatherDayHero',
};
export default meta;
type Story = StoryObj<typeof WeatherDayHero>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to WeatherDayHero!/gi)).toBeTruthy();
  },
};
