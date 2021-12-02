import React, { ButtonHTMLAttributes } from 'react';
import { joinClassNames } from '../../utils';
import * as styles from './styles.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button: React.VFC<ButtonProps> = ({
  type = 'button', label, className, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={joinClassNames(styles.button, className)} {...props}>
    {label}
  </button>
);
