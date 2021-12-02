import React from 'react';
import { BasePictoCardProps, BasePictoCard } from '../BasePictoCard';
import * as styles from './styles.css';

export type PictoCardProps = Omit<BasePictoCardProps, 'children'> & {
  cardTitle: string;
};

export const PictoCard: React.VFC<PictoCardProps> = ({
  cardTitle, ...props
}) => (
  <BasePictoCard {...props}>
    <div className={styles.contents}>
      {cardTitle}
    </div>
  </BasePictoCard>
);
