import React, { HTMLAttributes, ImgHTMLAttributes } from 'react';
import { joinClassNames } from '../../../utils';
import * as styles from './styles.css';

export type BasePictoCardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  imgAttributes: ImgHTMLAttributes<HTMLImageElement> & { alt: string; };
};

export const BasePictoCard: React.VFC<BasePictoCardProps> = ({
  children, imgAttributes, className, ...props
}) => (
  <div className={joinClassNames(styles.pictocard, className)} {...props}>
    <div className={styles.imgContainer}>
      <img
        {...imgAttributes}
        alt={imgAttributes.alt}
        className={joinClassNames(styles.img, imgAttributes.className)}
      />
    </div>
    <div className={styles.contents}>{children}</div>
  </div>
);
