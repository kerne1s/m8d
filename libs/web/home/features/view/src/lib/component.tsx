'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement, useEffect, useRef } from 'react';
import Snowfall from 'react-snowfall';
import { AppAudioPlayer } from '@m8d/web/shared/features/audio-player';
import { useNotification } from '@m8d/web/shared/features/notification';
import SunriseImage from './assets/sunrise.jpg';
import SunsetImage from './assets/sunset.jpg';
import styles from './component.module.scss';
import { ScrollIcon } from './components';
import { homeViewConfig } from './configuration';
import { useRandomQuotes } from './hooks';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeView(): ReactElement {
  const t = useTranslations('home.HOME');
  const quotes = useRandomQuotes(4, 30000);
  const hasQuotes = !!quotes.length;
  const sliderRef = useRef<HTMLDivElement>(null);
  const { showNotification, notificationComponent} = useNotification();

  useGSAP(() => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause',
      scroller: sliderRef.current,
    });
  }, { scope: sliderRef });

  const checkUserCountry = (): void => {
    fetch('https://get.geojs.io/v1/ip/country.json')
      .then(async (response) => {
        const data = await response.json();

        if (data.country === 'RU') {
          showNotification('Some media services are not available in your country.');
        }
      })
      .catch();
  };

  const checkMediaServices = (): void => {
    fetch(homeViewConfig.mediaUrl, { mode: 'no-cors' })
      .catch(() => {
        showNotification(t('NOTIFICATIONS.TEXT_MEDIA_SERVICES_ERROR'));
      });
  };

  useEffect(() => {
    showNotification(t('NOTIFICATIONS.TEXT_WELCOME'));
    checkUserCountry();
    checkMediaServices();
  }, []);

  return (
    <div ref={sliderRef} className={clsx('home min-h-screen no-scrollbar', styles.slider)}>
      <div className={clsx('relative w-full h-screen slide_1', styles.slider__item)}>
        <Image
          src={SunriseImage}
          alt='Sunrise Image'
          fill
          className='object-cover' />
        <Snowfall />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] animate-fade-in backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[0].quote}
            {quotes[0].author && ' – '}
            <span className='not-italic'>{quotes[0].author}</span>
          </p>
        </div>}
        <ScrollIcon className='absolute bottom-0 left-0 right-0 flex justify-center' />
      </div>

      <div className={clsx('relative w-full h-screen slide_2', styles.slider__item)}>
        <video
          src='https://cdn.pixabay.com/video/2022/03/28/112203-693798276_small.mp4'
          poster='images/river.jpg'
          preload='none'
          autoPlay
          loop
          muted
          className='h-full w-full object-cover' />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[1].quote}
            {quotes[1].author && ' – '}
            <span className='not-italic'>{quotes[1].author}</span>
          </p>
        </div>}
      </div>

      <div className={clsx('relative w-full h-screen slide_3', styles.slider__item)}>
        <Image
          src={SunsetImage}
          alt='Sunset Image'
          fill
          className='object-cover' />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[2].quote}
            {quotes[2].author && ' – '}
            <span className='not-italic'>{quotes[2].author}</span>
          </p>
        </div>}
      </div>

      <div className={clsx('relative w-full h-screen overflow-hidden slide_4', styles.slider__item)}>
        <video
          src='https://cdn.pixabay.com/video/2022/04/01/112626-695117479_small.mp4'
          poster='images/azalea-flowers.png'
          preload='none'
          autoPlay
          loop
          muted
          className='h-full w-full object-cover' />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[3].quote}
            {quotes[3].author && ' – '}
            <span className='not-italic'>{quotes[3].author}</span>
          </p>
        </div>}
      </div>
      {notificationComponent}

      <AppAudioPlayer playList={homeViewConfig.playlist} shouldAutoplay />
    </div>
  );
}
