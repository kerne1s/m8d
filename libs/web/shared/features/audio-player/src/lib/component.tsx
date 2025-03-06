'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

export interface PlaylistItem {
  src: string;
  title: string;
  artist: string;
}

interface AppAudioPlayerProps {
  playList: Array<PlaylistItem>;
  shouldAutoplay?: boolean;
}

const initialVolume = 0.3;

export function AppAudioPlayer({ playList, shouldAutoplay }: AppAudioPlayerProps): ReactNode {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(initialVolume);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = async (): Promise<void> => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleNextTrack = (): void => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playList.length);
  };

  const handlePrevTrack = (): void => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? playList.length - 1 : prevIndex - 1
    );
  };

  const handleTimeUpdate = (): void => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }
  };

  const handleSetTime = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef.current) {
      const parsedValue = parseFloat(event.target.value);
      const totalTime = audioRef.current.duration;
      const newTime = (parsedValue / 100) * totalTime;

      if (!isNaN(newTime)) {
        audioRef.current.currentTime = newTime;
      }
    }
  };

  const handleSetVolume = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef.current) {
      const parsedValue = parseFloat(event.target.value);
      const newVolume = parsedValue / 100;

      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleLoadedMetadata = (): void => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
  
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // SVG Icons
  const PlayIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-4 h-4 fill-current text-white'
      viewBox='0 0 24 24'
      style={{ transform: 'translateX(1px)' }}>
      <path d='M3 22v-20l18 10-18 10z' />
    </svg>
  );

  const PauseIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-4 h-4 fill-current text-white'
      viewBox='0 0 24 24'>
      <path d='M6 22h4v-20h-4v20zm8-20v20h4v-20h-4z' />
    </svg>
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

    if (shouldAutoplay) {
      const playAttempt = setInterval(() => {
        handlePlayPause()
          .then(() => {
            clearInterval(playAttempt);
          })
          .catch((error) => {
            if (error.name === 'NotSupportedError') {
              console.log('Source is not available.')
              clearInterval(playAttempt);

              return;
            }

            console.log('Unable to play the audio, User has not interacted yet.');
          });
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = playList[currentTrackIndex]?.src || '';
      audioRef.current.load();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setProgress(0);

      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, playList, isPlaying]);

  return (
    <div className='fixed left-4 bottom-4 z-10'>
      <div
        className='w-64 h-20 bg-[#000]/[.3] rounded relative flex items-center gap-2 p-4'
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
        }}>
        <div className='flex-grow'>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex flex-col'>
              <div className='text-white text-base font-semibold'>{playList[currentTrackIndex]?.title}</div>
              <div className='text-gray-300 text-sm'>{playList[currentTrackIndex]?.artist}</div>
            </div>
            <button
              onClick={handlePlayPause}
              className='w-8 h-8 items-center justify-center flex rounded-full bg-gray-500 border border-white'>
              {isPlaying ? PauseIcon : PlayIcon}
            </button>
          </div>
          <div className='relative w-full h-2 bg-gray-700 rounded-full overflow-hidden'>
            <div
              className='absolute top-0 left-0 h-full bg-gray-500'
              style={{ width: `${progress}%` }}
            />
            <input
              type='range'
              min='0'
              max='100'
              value={String(progress)}
              onChange={handleSetTime}
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />
            <audio
              ref={audioRef}
              onEnded={handleNextTrack}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          </div>
        </div>

        <div className='relative h-full w-2 bg-gray-700 rounded-full overflow-hidden'>
          <div
            className='absolute bottom-0 left-0 w-full bg-gray-500'
            style={{ height: `${volume * 100}%` }}
          />
          <input
            type='range'
            min='0'
            max='100'
            value={String(volume * 100)}
            onChange={handleSetVolume}
            className='absolute bottom-0 left-0 w-full h-full opacity-0 cursor-pointer -scale-y-[1]'
            style={{ writingMode: 'vertical-lr'}}
          />
        </div>
      </div>
    </div>
  );
}
