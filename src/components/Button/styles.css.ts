import { style } from '@vanilla-extract/css';
import { vars } from '../../tokens/index.css';

export const button = style({
  border: `1px solid ${vars.colour.pikachu}`,
  backgroundColor: vars.colour.pikachu,
  padding: `${vars.spacing.space16} ${vars.spacing.space32}`,
  font: vars.font.button,
  letterSpacing: vars.letterSpacing.button,
  textTransform: 'uppercase',
  color: vars.colour.poliwill,
  cursor: 'pointer',
  transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  ':hover': {
    backgroundColor: vars.colour.white,
    borderColor: vars.colour.poliwill,
    transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  },
});
