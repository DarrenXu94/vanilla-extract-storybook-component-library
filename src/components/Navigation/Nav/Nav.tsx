import React, { HTMLAttributes } from 'react';
import { NavItem } from '../NavItem';
import { joinClassNames } from '../../../utils';
import * as styles from './styles.css';

export type NavProps = HTMLAttributes<HTMLDivElement> & {
  children: React.FunctionComponentElement<typeof NavItem>
  | React.FunctionComponentElement<typeof NavItem>[]
};

export const Nav: React.VFC<NavProps> = ({
  children,
  className,
  ...props
}) => (
  <nav className={joinClassNames(styles.nav, className)} {...props}>
    <ul className={styles.itemContainer}>
      {React.Children.map(children, (child) => (
        <li className={styles.childItem}>{child}</li>
      ))}
    </ul>
  </nav>
);

Nav.displayName = 'Nav';
