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
        'neutral',
        'disabled-light',
      ],
      defaultValue: 'myrtille',
    },
    loading: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['default', 'link', 'outline'],
      defaultValue: 'default',
    },
    slot: {
      control: 'text',
      type: 'string',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SolarisButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    color: 'supernova',
  },
};

export const Black: Story = {
  args: {
    children: 'Button',
    color: 'black',
  },
};

export const CometLoading: Story = {
  args: {
    children: 'Button',
    color: 'comet',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    color: 'comet',
  },
};
