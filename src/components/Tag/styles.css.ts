import { style } from '@vanilla-extract/css';
import { vars } from '../../tokens/index.css';

export const button = style({
  border: `1px solid ${vars.colour.poliwill}`,
  backgroundColor: 'transparent',
  padding: `${vars.spacing.space8} ${vars.spacing.space16}`,
  font: vars.font.tag,
  letterSpacing: vars.letterSpacing.button,
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: vars.colour.poliwill,
  cursor: 'pointer',
  transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  ':hover': {
    backgroundColor: vars.colour.pikachu,
    borderColor: vars.colour.pikachu,
    transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  },
});
