'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement, useEffect, useRef } from 'react';
import { useNotification } from '@m8d/web/shared/features/notification';
import FlowersImage from './assets/flowers.jpg';
import RiverImage from './assets/river.jpg';
import SunriseImage from './assets/sunrise.jpg';
import SunsetImage from './assets/sunset.jpg';
import styles from './component.module.scss';
import { useRandomQuotes } from './hooks';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeView(): ReactElement {
  const t = useTranslations('home.HOME');
  const quotes = useRandomQuotes(4);
  const hasQuotes = !!quotes.length;
  const sliderRef = useRef<HTMLDivElement>(null);
  const { showNotification, notificationComponent} = useNotification();

  useGSAP(() => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause',
      scroller: sliderRef.current,
    });

    gsap.to('.slide_3', {
      scrollTrigger: {
        trigger: '.slide_3',
        toggleActions: 'restart pause reverse pause'
      },
      duration: 1, 
      backgroundColor: '#FFA500', 
      ease: 'none',
    })
  }, { scope: sliderRef });

  useEffect(() => {
    showNotification(t('NOTIFICATIONS.TEXT_WELCOME'));
  }, []);

  return (
    <div ref={sliderRef} className={clsx('home min-h-screen no-scrollbar', styles.slider)}>
      <div className={clsx('relative w-full h-screen slide_1', styles.slider__item)}>
        <Image
          src={SunriseImage}
          alt='Sunrise Image'
          fill
          className='object-cover' />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[0].quote}
            {quotes[0].author && ' - '}
            <span className='not-italic'>{quotes[0].author}</span>
          </p>
        </div>}
      </div>
      <div className={clsx('relative w-full h-screen slide_2', styles.slider__item)}>
        <Image
          src={RiverImage}
          alt='River Image'
          fill
          className='object-cover' />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[1].quote}
            {quotes[1].author && ' - '}
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
            {quotes[2].author && ' - '}
            <span className='not-italic'>{quotes[2].author}</span>
          </p>
        </div>}
      </div>
      <div className={clsx('relative w-full h-screen slide_4', styles.slider__item)}>
        <Image
          src={FlowersImage}
          alt='Flowers Image'
          fill
          className='object-cover' />
        {hasQuotes && <div className='absolute inset-0 flex justify-center items-center text-3xl italic text-white px-4'>
          <p className='md:max-w-[50%] backdrop-blur-md p-3 rounded-xl border border-white'>
            {quotes[3].quote}
            {quotes[3].author && ' - '}
            <span className='not-italic'>{quotes[3].author}</span>
          </p>
        </div>}
      </div>
      {notificationComponent}
    </div>
  );
}
