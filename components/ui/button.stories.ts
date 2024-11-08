import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button Variants',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      description: 'Button Size',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked', description: 'Function call when button is clicked' },
    className: { control: 'text', description: 'Custom Tailwind CSS classes apply to button' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    disabled: false,
    onClick: action('default click'),
    children: 'Default Button',
    className: 'shadow-lg',
  },
};
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'lg',
    disabled: false,
    onClick: action('destructive click'),
    children: 'Destructive Button',
    className: 'shadow-lg',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    disabled: false,
    onClick: action('outline click'),
    children: 'Outline Button',
    className: 'shadow-lg',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    disabled: false,
    onClick: action('secondary click'),
    children: 'Secondary Button',
    className: 'shadow-lg',
  },
};
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'lg',
    disabled: false,
    onClick: action('ghost click'),
    children: 'Ghost Button',
    className: 'shadow-lg',
  },
};
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'lg',
    disabled: false,
    onClick: action('link click'),
    children: 'Link Button',
    className: 'shadow-lg',
  },
};
