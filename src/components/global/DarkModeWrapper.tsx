import React, { createContext } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
export const DarkModeContext = createContext({
  isDarkMode: localStorage.theme === 'dark',
  darkModeSelector: () => {},
});

export function DarkModeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode, darkModeSelector } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ isDarkMode, darkModeSelector }}>
      {children}
    </DarkModeContext.Provider>
  );
}
