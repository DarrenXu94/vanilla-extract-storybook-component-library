import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img580x387 from '../../../assets/img/img-580x387.jpg';
import { PictoCard } from '.';

export default {
  title: 'Molecules/PictoCard/PictoCard',
  component: PictoCard,
} as ComponentMeta<typeof PictoCard>;

const Template: ComponentStory<typeof PictoCard> = (args) => <PictoCard {...args} />;

export const Explorer = Template.bind({});
Explorer.args = {
  imgAttributes: {
    src: Img580x387,
  },
  cardTitle: 'Article Title',
};
