import React, { HTMLAttributes } from 'react';
import { joinClassNames } from '../../../utils';
import * as styles from './styles.css';

export type PictoCardGroupProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const PictoCardGroup: React.VFC<PictoCardGroupProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={joinClassNames(styles.pictoCardGroup, className)} {...props}>
    {children}
  </div>
);
