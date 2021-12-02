const breakpointMd = '768px';
const breakpointSm = '576px';

const large = `screen and (min-width: calc(${breakpointMd} + 1px))`;
const medium = `screen and (min-width: calc(${breakpointSm} + 1px)) and (max-width: ${breakpointMd})`;
const small = `screen and (max-width: ${breakpointSm})`;

export const mediaQuery = {
  large,
  medium,
  small,
};
