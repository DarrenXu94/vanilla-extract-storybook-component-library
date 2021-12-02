import { style } from '@vanilla-extract/css';
import { tokens, vars } from '../../../tokens/index.css';

const HIGHLIGHT_OVERFLOW = '2px';

export const navItem = style({
  position: 'relative',
  font: vars.font.navItem,
  color: vars.colour.squirtle,
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: vars.letterSpacing.navItem,
  zIndex: 0,
  ':hover': {
    color: vars.colour.poliwill,
  },
  '::after': {
    content: "''",
    position: 'absolute',
    display: 'block',
    width: `calc(100% + (${HIGHLIGHT_OVERFLOW} * 2))`,
    top: '100%',
    bottom: 0,
    left: `-${HIGHLIGHT_OVERFLOW}`,
    zIndex: -1,
  },
  selectors: {
    '&:hover:after': {
      backgroundColor: vars.colour.bulbasaur,
      transition: 'top .3s ease-in-out',
      top: '50%',
      bottom: `-${HIGHLIGHT_OVERFLOW}`,
    },
  },
});

export const navItemActive = style({
  color: vars.colour.poliwill,
  '::after': {
    backgroundColor: vars.colour.pikachu,
    top: '50%',
    bottom: `-${HIGHLIGHT_OVERFLOW}`,
  },
  selectors: {
    '&:hover:after': {
      backgroundColor: vars.colour.pikachu,
    },
  },
});
