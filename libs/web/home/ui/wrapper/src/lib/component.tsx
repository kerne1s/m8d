'use client';

import clsx from 'clsx';
import { PropsWithChildren, ReactElement, useState } from 'react';
import { HomeFarewell, HomePanel } from './components';

export function HomeWrapper({ children }: PropsWithChildren): ReactElement {
  const [isHomeClosed, setIsHomeClosed] = useState(false);

  const toggleCloseHome = (): void => {
    setIsHomeClosed((value) => !value);
  };

  return (
    <div className={clsx('relative min-h-screen', isHomeClosed && 'home-closed')}>
      <HomePanel isHomeClosed={isHomeClosed} onClosePressed={toggleCloseHome} />
      {isHomeClosed && <HomeFarewell />}
      {children}
    </div>
  );
}
