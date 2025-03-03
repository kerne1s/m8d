import Image from 'next/image';
import { ReactElement } from 'react';
import LoginIcon from '../../assets/login.svg';
import LogoutIcon from '../../assets/logout.svg';

interface HomePanelProps {
  isHomeClosed: boolean;
  onClosePressed: () => void;
}

export function HomePanel({ isHomeClosed, onClosePressed }: HomePanelProps): ReactElement {
  return (
    <aside className='h-[40px] w-full flex absolute top-0 left-0 right-0 z-[1000] bg-gray-300 blur-lg hover:blur-none transition-[filter] duration-300 ease-out px-4'>
      <button onClick={onClosePressed} className='ml-auto'>
        <Image
          src={isHomeClosed ? LoginIcon : LogoutIcon}
          alt='Close icon'
          width={24}
          height={24} />
      </button>
    </aside>
  )
}
