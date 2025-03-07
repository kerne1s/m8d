'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  className?: string;
}

const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), { ssr: false });

export function Typewriter({ text, className }: TypewriterProps): ReactNode {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <div className={clsx('w-[80%] md:w-[500px] h-[160px] bg-gray-800 border-[3px] border-white rounded-md p-2 opacity-[0.67] md:opacity-[0.9]', className)}>
        <TypeWriterEffect
          text={text}
          typeSpeed={100}
          startDelay={100}
          textStyle={{ color: 'rgb(74 222 128)' }}
          cursorColor='rgb(74 222 128)' />
      </div>
    )
  );
}
