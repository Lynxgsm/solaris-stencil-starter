import type { Meta, StoryObj } from '@storybook/react';

import { SolarisSwitch } from 'solaris-react';

const meta = {
  title: 'Input/Switch',
  component: SolarisSwitch,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SolarisSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Switch',
  },
};
