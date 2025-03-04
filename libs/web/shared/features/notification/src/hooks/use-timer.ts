import { useEffect, useState } from 'react';

export const useTimer = (timeoutInSeconds: number, onTimeout: () => void): typeof timerService => {
  const [timer, setTimer] = useState(timeoutInSeconds);
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timer>();

  const startTimer = (): void => {
    setTimeInterval(setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000));
  };

  const resetTimer = (): void => {
    setTimer(timeoutInSeconds);
    clearInterval(timeInterval);
  };

  useEffect(() => {
    if (timer === 0) {
      onTimeout();
    }
  }, [timer]);

  const timerService = { timer, resetTimer, startTimer };

  return timerService;
};
