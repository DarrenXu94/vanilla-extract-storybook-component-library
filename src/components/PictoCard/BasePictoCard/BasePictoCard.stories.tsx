import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img580x387 from '../../../assets/img/img-580x387.jpg';
import Img2048x738 from '../../../assets/img/img-2048x738.jpg';
import { BasePictoCard } from '.';

export default {
  title: 'Molecules/PictoCard/BasePictoCard',
  component: BasePictoCard,
  parameters: {
    docs: {
      description: {
        component: 'Use styles to adjust the position of your image within the frame.',
      },
    },
  },
} as ComponentMeta<typeof BasePictoCard>;

const Template: ComponentStory<typeof BasePictoCard> = (args) => <BasePictoCard {...args} />;

export const Explorer = Template.bind({});
Explorer.args = {
  imgAttributes: {
    src: Img580x387,
    alt: 'Img580x387',
  },
  children: '{children}',
};

export const PictoCardImg580x387 = Template.bind({});
PictoCardImg580x387.storyName = 'PictoCard - Img580x387';
PictoCardImg580x387.args = {
  imgAttributes: {
    src: Img580x387,
    alt: 'Img580x387',
  },
  children: 'Image 580x387',
};

export const LongImageBasePictoCard = Template.bind({});
LongImageBasePictoCard.storyName = 'PictoCard - Img2048x738';
LongImageBasePictoCard.args = {
  imgAttributes: {
    src: Img2048x738,
    alt: 'Img2048x738',
    style: { width: 'unset', height: '100%', left: '-43%' },
  },
  children: 'Image 2048x738',
};
