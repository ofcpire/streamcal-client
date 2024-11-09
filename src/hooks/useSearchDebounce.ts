import React, { useState, useEffect, useCallback } from 'react';

export default function useSearchDebounce(delay: number = 500) {
  const [inputString, setInputString] = useState<string>('');
  const [debouncedString, setDebouncedString] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedString(inputString);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputString, delay]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputString(e.target.value);
    },
    []
  );

  return {
    debouncedString,
    inputString,
    setInputString,
    onChange,
  };
}
