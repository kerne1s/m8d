import { useEffect, useState } from 'react';
import { homeViewConfig, QuoteItem } from '../configuration';

const getRandomQuotes = (count: number): Array<QuoteItem> => {
  const quotes = homeViewConfig.quotes;
  const uniqueQuotes = new Set<QuoteItem>();

  while (uniqueQuotes.size < count && uniqueQuotes.size < quotes.length) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    uniqueQuotes.add(randomQuote);
  }

  return Array.from(uniqueQuotes);
};

export const useRandomQuotes = (count: number, refreshTimeMs = 0): Array<QuoteItem> => {
  const [quotes, setQuotes] = useState<Array<QuoteItem>>([]);

  useEffect(() => {
    setQuotes(getRandomQuotes(count));

    if (refreshTimeMs) {
      const interval = setInterval(() => {
        setQuotes(getRandomQuotes(count));
      }, refreshTimeMs);

      return () => clearInterval(interval);
    }
  }, []);

  return quotes;
};
