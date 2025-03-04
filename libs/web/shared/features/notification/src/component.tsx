import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { ReactElement } from 'react';

interface NotificationProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  title?: string;
  message: string;
}

export function Notification({ title, message, onMouseEnter, onMouseLeave }: NotificationProps): ReactElement {
  const t = useTranslations('web-shared.NOTIFICATIONS');

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={clsx(
        'fixed right-[60px] top-[60px] w-[280px] min-h-[80px] max-h-[140px] bg-gray-200 border border-gray-400 p-4 rounded-xl shadow-md',
        'flex flex-col gap-2 opacity-[0.75] hover:opacity-[1] transition-opacity duration-300 ease-out',
      )}>
      <div>
        <span className='text-sm'>{title || t('TEXT_DEFAULT_TITLE')}</span>
      </div>
      <p>{message}</p>
    </div>
  );
}
