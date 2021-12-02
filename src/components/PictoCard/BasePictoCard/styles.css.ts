import { style } from '@vanilla-extract/css';
import { vars } from '../../../tokens/index.css';

export const pictocard = style({
  position: 'relative',
  backgroundColor: vars.colour.geodude,
});

export const imgContainer = style({
  position: 'relative',
  paddingTop: 'calc(200% /3)',
  overflow: 'hidden',
});

export const img = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
});

export const contents = style({
  padding: vars.spacing.space24,
  font: vars.font.pictocardTitle,
  color: vars.colour.poliwill,
  textTransform: 'uppercase',
});
