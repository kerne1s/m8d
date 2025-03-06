import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement } from 'react';
import LoginIcon from '../../assets/login.svg';
import LogoutIcon from '../../assets/logout.svg';

interface HomePanelProps {
  isHomeClosed: boolean;
  onClosePressed: () => void;
}

export function HomePanel({ isHomeClosed, onClosePressed }: HomePanelProps): ReactElement {
  const t = useTranslations('home.HOME.PANEL');

  return (
    <aside
      className={clsx(
        'min-h-[40px] w-full flex absolute top-0 left-0 right-0 z-[1000] bg-gray-300 transition-[filter] duration-300 ease-out px-4 animate-blur hover:!blur-none',
        'flex flex-col'
      )}>
      <div className='h-[40px] flex items-center w-full'>
        <span className='text-lg font-bold text-gray-500'>{t('TEXT_APP')}</span>
        <button onClick={onClosePressed} className='ml-auto'>
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
