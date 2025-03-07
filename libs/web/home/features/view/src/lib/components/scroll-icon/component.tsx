import clsx from 'clsx';
import { ReactElement } from 'react';
import styles from './component.module.scss';

interface ScrollIconProps {
  className?: string;
}

export function ScrollIcon({ className }: ScrollIconProps): ReactElement {
  return (
    <span className={clsx(styles.icon, 'text-xl text-gray-500', className)}>
      <span />
      <span />
      <span />
      Scroll
    </span>
  );
};
