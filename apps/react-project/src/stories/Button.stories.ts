import type { Meta, StoryObj } from '@storybook/react';

import { SolarisButton } from 'solaris-react';

const meta = {
  title: 'Buttons/Button',
  component: SolarisButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: [
        'supernova',
        'black',
        'myrtille',
        'nebula-blue',
        'error',
        'comet',
      ],
    },
    loading: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SolarisButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Here is a button',
    color: 'supernova',
  },
};

export const Black: Story = {
  args: {
    children: 'Here is a button',
    color: 'black',
    fullWidth: true,
  },
};
