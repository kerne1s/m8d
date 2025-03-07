'use client';

import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import { secretGardenConfig } from '../../configuration';

interface CountdownTimerProps {
  className?: string;
}

export function CountdownTimer({ className }: CountdownTimerProps): ReactNode {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date(secretGardenConfig.eventDate));
  const [isMounted, setIsMounted] = useState(false);

  const getTimeRemaining = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const totalTime = targetDate.getTime() - currentTime.getTime();
    const seconds = Math.floor((totalTime / 1000) % 60);
    const minutes = Math.floor((totalTime / (1000 * 60)) % 60);
    const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const { days, hours, minutes, seconds } = getTimeRemaining();

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return isMounted && (
    <div className={clsx('text-lg font-bold text-white p-4 border border-white backdrop-blur-md opacity-75 md:opacity-50', className)}>
      <h1>Theme change in</h1>
      <div>
        {days > 0 && <span>{days} days </span>}
        {hours > 0 && <span>{hours.toString().padStart(2, '0')}:</span>}
        <span>{minutes.toString().padStart(2, '0')}:</span>
        <span>{seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}
