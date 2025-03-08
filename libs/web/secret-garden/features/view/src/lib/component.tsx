'use client';

import { ReactElement, useEffect, useState } from 'react';
import { AppAudioPlayer } from '@m8d/web/shared/features/audio-player';
import { CountdownTimer, Typewriter } from './components';
import { secretGardenConfig } from './configuration';

export function SecretGardenView(): ReactElement {
  const [isEventStarted, setIsEventStarted] = useState(new Date() > new Date(secretGardenConfig.eventDate));
  const videoSrc = isEventStarted ? 'https://cdn.pixabay.com/video/2020/07/22/45316-442643130_medium.mp4' : 'https://cdn.pixabay.com/video/2023/08/11/175540-853887878_small.mp4';
  const posterSrc = isEventStarted ? 'images/theme-2.png' : 'images/theme-1.png';
  const quote = isEventStarted ? secretGardenConfig.quotes[1] : secretGardenConfig.quotes[0];
  const playlist = isEventStarted ? secretGardenConfig.playlist.afterEvent : secretGardenConfig.playlist.beforeEvent;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isEventStartedUpdate = new Date() > new Date(secretGardenConfig.eventDate);

      setIsEventStarted(isEventStartedUpdate);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [])

  return (
    <div className='home min-h-screen no-scrollbar'>
      <div className='relative w-full h-screen'>
        <video
          src={videoSrc}
          poster={posterSrc}
          preload='none'
          autoPlay
          loop
          muted
          className='h-full w-full object-cover' />
        <Typewriter text={quote} className='fixed top-[120px] md:top-[50%] left-[10%] md:left-[100px] max-w-[500px]' />
        {!isEventStarted && <CountdownTimer className='w-[220px] fixed bottom-[140px] md:bottom-[100px] left-0 md:left-[unset] right-0 md:right-[100px] mx-auto md:mx-0' />}
        <AppAudioPlayer playList={playlist} shouldAutoplay />
      </div>
    </div> 
  );
}
