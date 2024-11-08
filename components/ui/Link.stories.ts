import Link from './Link';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Link',
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    ahref: { control: 'text' },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShortTitle: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    ahref: 'https://example.com',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'My Super Long Title',
    subtitle: 'My Super Long Subtitle',
    ahref: 'https://example.com',
  },
};
