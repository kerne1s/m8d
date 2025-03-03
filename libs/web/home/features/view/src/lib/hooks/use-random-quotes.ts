import { useEffect, useState } from 'react';
import { homeViewConfig, QuoteItem } from '../configuration';

const getRandomQuotes = (count: number): Array<QuoteItem> => {
  const quotes = homeViewConfig.quotes;

  return Array.from({ length: count }, () => quotes[Math.floor(Math.random() * quotes.length)]);
};

export const useRandomQuotes = (count: number): Array<QuoteItem> => {
  const [quotes, setQuotes] = useState<Array<QuoteItem>>([]);

  useEffect(() => {
    setQuotes(getRandomQuotes(count));
  }, []);

  return quotes;
};
