import React, { AnchorHTMLAttributes } from 'react';
import { joinClassNames } from '../../../utils';
import * as styles from './styles.css';

export type NavItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string;
  isActive?: boolean;
};

export const NavItem: React.VFC<NavItemProps> = ({
  text, isActive = false, className, ...props
}) => (
  <a
    className={joinClassNames(
      className,
      styles.navItem,
      isActive && styles.navItemActive,
    )}
    {...props}
  >
    {text}
  </a>
);

NavItem.displayName = 'NavItem';
