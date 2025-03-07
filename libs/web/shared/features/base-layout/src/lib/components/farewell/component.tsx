import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Fragment, ReactElement } from 'react';
import FarewellImage from '../../assets/farewell.jpg';

export function HomeFarewell(): ReactElement {
  const t = useTranslations('home.HOME');

  return (
    <Fragment>
      <Image
        src={FarewellImage}
        alt='Farewell Image'
        fill
        className='object-cover object-left opacity-0 animate-fade-in'
      />
      <p className='h-full w-full text-3xl text-white italic absolute flex justify-center items-center'>
        {t('TEXT_SEE_YOU_LATER')}
      </p>
    </Fragment>
  );
}
