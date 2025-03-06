import { useEffect, useState } from 'react';

export const useLocalTime = (refreshRate: number = 1000): string => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, refreshRate);

    return () => clearInterval(interval);
  }, []);

  return `${date.getHours()}:${date.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
};
