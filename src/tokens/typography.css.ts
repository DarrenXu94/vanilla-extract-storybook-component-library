import { globalFontFace } from '@vanilla-extract/css';
// import ButlerBoldWoff2 from '../assets/fonts/Butler_Webfont/Butler-Bold.woff2';
// import ButlerBoldWoff from '../assets/fonts/Butler_Webfont/Butler-Bold.woff';
// import OpenSansLight from '../assets/fonts/Open_Sans/OpenSans-Light.ttf';

// globalFontFace('Butler Bold', {
//   src: `url(${ButlerBoldWoff2}) format("woff2"), url(${ButlerBoldWoff}) format("woff")`,
// });

// globalFontFace('Open Sans Light', {
//   src: `url(${OpenSansLight}) format("ttf")`,
// });

const fontFamily = {
  main: '"Butler Bold", serif',
  secondary: '"Open Sans Light", sans-serif',
};

const fontWeight = {
  light: '300',
  regular: '400',
  bold: '600',
};

const fontSize = {
  publicationDate: '0.8rem',
  button: '0.8rem',
  pictocardTitle: '1.1rem',
  pageTitle: '3rem',
  sectionTitle: '1.75rem',
  contentTitle: '1.75rem',
  content: '1rem',
  tag: '0.7rem',
};

const lineHeight = {
  publicationDate: '1.5',
  button: '1.5',
  tag: '1.5',
  pictocardTitle: '1.2',
  pageTitle: '1.2',
  sectionTitle: '1.2',
  contentTitle: '1.2',
  content: '1',
};

const font = {
  button: `${fontWeight.bold} ${fontSize.button}/${lineHeight.button} ${fontFamily.secondary}`,
  pictocardTitle: `${fontWeight.regular} ${fontSize.pictocardTitle}/${lineHeight.pictocardTitle} ${fontFamily.secondary}`,
  pageTitle: `${fontWeight.regular} ${fontSize.pageTitle}/${lineHeight.pageTitle} ${fontFamily.main}`,
  sectionTitle: `${fontWeight.regular} ${fontSize.sectionTitle}/${lineHeight.sectionTitle} ${fontFamily.secondary}`,
  contentTitle: `${fontWeight.regular} ${fontSize.contentTitle}/${lineHeight.contentTitle} ${fontFamily.secondary}`,
  content: `${fontWeight.light} ${fontSize.content}/${lineHeight.content} ${fontFamily.secondary}`,
  publicationDate: `${fontWeight.light} ${fontSize.publicationDate}/${lineHeight.publicationDate} ${fontFamily.secondary}`,
  tag: `${fontWeight.light} ${fontSize.tag}/${lineHeight.tag} ${fontFamily.secondary}`,
  navItem: `${fontWeight.regular} ${fontSize.button}/${lineHeight.button} ${fontFamily.secondary}`,
};

const letterSpacing = {
  button: '0.075em',
  navItem: '0.05em',
};

export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  font,
  letterSpacing,
};
