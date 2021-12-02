import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavItem } from './NavItem';

export default {
  title: 'Navigation/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const Explorer = Template.bind({});
Explorer.args = {
  text: 'NavItem text',
  href: '',
};

export const Default = Template.bind({});
Default.args = {
  text: 'NavItem text',
  href: '',
};

export const Active = Template.bind({});
Active.args = {
  text: 'NavItem text',
  href: '',
  isActive: true,
};
