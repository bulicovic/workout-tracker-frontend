import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      description: 'Input types',
      options: ['text', 'password'],
    },
    className: { control: 'text', description: 'Custom Tailwind CSS classes apply to input' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text', description: 'Description for the input field' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default Input',
  args: {
    type: 'text',
    disabled: false,
    className: 'bg-amber-400',
    placeholder: 'Placeholder...',
  },
};
