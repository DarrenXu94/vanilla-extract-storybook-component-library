import React from 'react';
import { Meta } from '@storybook/react';
import { vars } from './index.css';

export default {
  title: 'Tokens/Typography',
} as Meta;

export const Typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ font: vars.font.pageTitle }}>Page Title</span>
    <span style={{ font: vars.font.sectionTitle }}>Section Title</span>
    <span style={{ font: vars.font.contentTitle }}>Content Title</span>
    <span style={{ font: vars.font.content }}>Content</span>
  </div>
);
