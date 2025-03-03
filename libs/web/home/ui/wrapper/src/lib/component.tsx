'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PropsWithChildren, ReactElement, useState } from 'react';
import FarewellImage from './assets/farewell.jpg';
import { HomePanel } from './components';


export function HomeWrapper({ children }: PropsWithChildren): ReactElement {
  const t = useTranslations('home.HOME');
  const [isHomeClosed, setIsHomeClosed] = useState(false);

  const toggleCloseHome = (): void => {
    setIsHomeClosed((value) => !value);
  };

  return (
    <div className={clsx('relative min-h-screen', isHomeClosed && 'home-closed')}>
      <HomePanel isHomeClosed={isHomeClosed} onClosePressed={toggleCloseHome} />
      <Image
        src={FarewellImage}
        alt='Farewell Image'
        fill
        className='object-cover object-left opacity-0 animate-fade-in' />
      <p className='h-full w-full text-3xl text-white italic absolute flex justify-center items-center'>{t('TEXT_SEE_YOU_LATER')}</p>
      {children}
    </div>
  );
}
