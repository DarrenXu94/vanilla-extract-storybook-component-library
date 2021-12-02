import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img580x387 from '../../../assets/img/img-580x387.jpg';
import { ArticlePictoCard } from '.';

export default {
  title: 'Molecules/PictoCard/ArticlePictoCard',
  component: ArticlePictoCard,
} as ComponentMeta<typeof ArticlePictoCard>;

const Template: ComponentStory<typeof ArticlePictoCard> = (args) => <ArticlePictoCard {...args} />;

export const Explorer = Template.bind({});
Explorer.args = {
  imgAttributes: {
    src: Img580x387,
  },
  category: 'Category',
  publicationDate: new Date(),
  articleTitle: 'Article Title',
  categoryLink: '#',
};
