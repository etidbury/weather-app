import type { Meta, StoryObj } from '@storybook/react';
import { SectionBreakdown } from './section-breakdown';

const meta: Meta<typeof SectionBreakdown> = {
  component: SectionBreakdown,
  title: 'dashboard/weather-overview/section-breakdown',
};
export default meta;
type Story = StoryObj<typeof SectionBreakdown>;

export const Primary: Story = {
  args: {},
};
