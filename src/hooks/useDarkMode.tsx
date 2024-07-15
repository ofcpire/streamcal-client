import React, { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark'
  );
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log(isDarkMode);
  }, [isDarkMode]);

  const darkModeSelector = () => {
    if (localStorage.getItem('theme') !== 'dark') {
      localStorage.theme = 'dark';
    } else localStorage.theme = 'light';
    setIsDarkMode(localStorage.theme === 'dark');
  };

  return { isDarkMode, darkModeSelector };
}
