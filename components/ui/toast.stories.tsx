import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastAction } from './toast';
import { Button } from './button';
import { useToast } from '../hooks/use-toast';
import { action } from '@storybook/addon-actions';

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: 'This is a random Toast',
          description: 'Description of a random Toast',
          action: <ToastAction altText="Undo">Undo</ToastAction>,
        })
      }
    >
      Show Toast
    </Button>
  );
};

const meta: Meta<typeof Toast> = {
  title: 'Components/UI/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    onClick: action('default click'),
    children: 'Default Button',
    className: '',
  },
};
