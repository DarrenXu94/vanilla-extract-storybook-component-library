import React, { AnchorHTMLAttributes } from 'react';
import { joinClassNames } from '../../utils';
import * as styles from './styles.css';

export type TagProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export const Tag: React.VFC<TagProps> = ({
  label, className, ...props
}) => (
  <a className={joinClassNames(styles.button, className)} {...props}>
    {label}
  </a>
);
