'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement, useState } from 'react';
import LoginIcon from '../../assets/login.svg';
import LogoutIcon from '../../assets/logout.svg';
import { Calendar } from '../calendar';
import styles from './component.module.scss';

interface HomePanelProps {
  isHomeClosed: boolean;
  onClosePressed: () => void;
}

export function HomePanel({ isHomeClosed, onClosePressed }: HomePanelProps): ReactElement {
  const t = useTranslations('home.HOME.PANEL');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = (): void => {
    setIsCalendarOpen((value) => !value);
  };

  return (
    <aside
      className={clsx(
        'min-h-[40px] w-full flex absolute top-0 left-0 right-0 z-[1000] bg-gray-300 transition-[filter] duration-300 ease-out px-4 animate-blur hover:!blur-none',
        'flex flex-col',
        isCalendarOpen && styles.panel_open
      )}>
      <div className='relative h-[40px] flex items-center justify-between w-full'>
        <span className='text-lg font-bold text-gray-500'>{t('TEXT_APP')}</span>
        <Calendar isOpen={isCalendarOpen} onToggle={toggleCalendar} />
        <button onClick={onClosePressed}>
          <Image
            src={isHomeClosed ? LoginIcon : LogoutIcon}
            alt='Close icon'
            width={24}
            height={24} />
        </button>
      </div>
    </aside>
  );
}
