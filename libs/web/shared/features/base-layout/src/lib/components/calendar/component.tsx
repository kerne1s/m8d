'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import ArtImage from '../../assets/art.png';
import { useLocalTime } from '../../hooks';

interface CalendarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Calendar({ isOpen, onToggle }: CalendarProps): ReactNode {
  const [isMounted, setIsMounted] = useState(false);
  const currentTime = useLocalTime();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <div>
        <button onClick={onToggle} className='text-lg'>
          {currentTime}
        </button>
        {isOpen && (
          <div className='max-w-[700px] absolute top-[40px] left-0 right-0 md:flex mx-auto rounded-b-xl bg-gray-300 opacity-[0.85] overflow-hidden'>
            <Image
              src={ArtImage}
              alt='Art Image'
              width={350}
              className='object-contain absolute md:static inset-0 opacity-25 md:opacity-100'
            />
            <ReactCalendar className={clsx('!bg-gray-300 !border-none')} />
          </div>
        )}
      </div>
    )
  );
}
