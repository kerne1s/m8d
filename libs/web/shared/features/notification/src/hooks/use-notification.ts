import { useEffect, useState } from 'react';
import { Notification } from '../component';
import { useTimer } from './use-timer';

export const useNotification = (): typeof notificationService => {
  const [notification, setNotification] = useState<string>();

  const resetNotification = (): void => {
    setNotification(undefined);
  };

  const { timer, startTimer, resetTimer } = useTimer(3, resetNotification);

  const showNotification = (message: string): void => {
    setTimeout(() => {
      setNotification(message);
    }, 1000);
  };

  useEffect(() => {
    if (!notification) {
      return;
    }

    if (!timer) {
      resetTimer();
    }

    startTimer();
  }, [notification]);

  const notificationService = {
    showNotification,
    notificationComponent: notification && Notification({ message: notification, onMouseEnter: resetTimer, onMouseLeave: startTimer }),
  };

  return notificationService;
};
