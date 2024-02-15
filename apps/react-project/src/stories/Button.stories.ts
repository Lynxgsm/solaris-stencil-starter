import type { Meta, StoryObj } from '@storybook/react';

import { SolarisButton } from 'solaris-react';

const meta = {
  title: 'Buttons/Button',
  component: SolarisButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SolarisButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Here is a button',
  },
};
