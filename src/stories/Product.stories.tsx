import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Product } from '../components/Product';

const meta: Meta<typeof Product> = {
  title: 'Example/Product',
  component: Product,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Product> = (args) => {
  return (
    <Product {...args}/>
  );
};
type Story = StoryObj<typeof Product>;

export const Primary: Story = Template.bind({});
Primary.args = {
  name: 'John Doe'
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  name: 'Foo Bar'
};
