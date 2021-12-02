import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img580x387 from '../../../assets/img/img-580x387.jpg';
import { PictoCardGroup } from '.';
import { BasePictoCard } from '..';

export default {
  title: 'Molecules/PictoCard/PictoCardGroup',
  component: PictoCardGroup,
} as ComponentMeta<typeof PictoCardGroup>;

const Template: ComponentStory<typeof PictoCardGroup> = (args) => <PictoCardGroup {...args} />;

const ExamplePictoCard = () => <BasePictoCard imgAttributes={{ src: Img580x387, alt: 'Img' }}>Title goes here</BasePictoCard>;

export const Explorer = Template.bind({});
Explorer.args = {
  children:
  <>
    <ExamplePictoCard />
    <ExamplePictoCard />
    <ExamplePictoCard />
    <ExamplePictoCard />
    <ExamplePictoCard />
  </>,
};
