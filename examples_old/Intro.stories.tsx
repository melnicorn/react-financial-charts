import type { Meta, StoryObj } from '@storybook/react-vite';
import StockChart from './features/StockChart';

const meta: Meta<typeof StockChart> = {
  title: 'Intro',
  component: StockChart,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null, // This will use the MDX file instead
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 