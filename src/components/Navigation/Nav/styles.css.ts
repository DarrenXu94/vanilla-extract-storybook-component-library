import { style } from '@vanilla-extract/css';
import { tokens, vars } from '../../../tokens/index.css';

export const nav = style({
  display: 'flex',
});

export const itemContainer = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  margin: '0',
  '@media': {
    [tokens.mediaQuery.large]: {
      flexDirection: 'row',
    }
  }
});

export const childItem = style({
  '@media': {
    [tokens.mediaQuery.large]: {
      marginLeft: vars.spacing.space32,
      selectors: {
        '&:first-child': {
          marginLeft: '0',
        },
      },
    },
  }
});
