import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './side-bar';

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  title: 'dashboard/weather-overview/side-bar',
};
export default meta;
type Story = StoryObj<typeof SideBar>;

export const Primary: Story = {
  args: {},
};
