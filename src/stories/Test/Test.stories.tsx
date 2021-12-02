import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Test } from './Test';

export default {
  title: 'Example/Test',
  component: Test,
  argTypes: {},
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Test',
// };
