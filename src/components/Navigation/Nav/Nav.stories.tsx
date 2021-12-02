import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from './Nav';
import { NavItem } from '../NavItem';

export default {
  title: 'Navigation/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Explorer: ComponentStory<typeof Nav> = () => (
  <Nav>
    <NavItem text="child 1" href="" />
    <NavItem text="child 2" href="" />
    <NavItem text="child 3" href="" />
    <NavItem text="child 4" href="" />
  </Nav>
);

export const ActiveItem: ComponentStory<typeof Nav> = () => (
  <Nav>
    <NavItem text="child 1" href="" />
    <NavItem text="child 2" href="" isActive />
    <NavItem text="child 3" href="" />
    <NavItem text="child 4" href="" />
  </Nav>
);
