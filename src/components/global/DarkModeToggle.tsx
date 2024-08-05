import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function DarkModeToggle() {
  const { isDarkMode, darkModeSelector } = useContext(DarkModeContext);
  return (
    <label className='inline-flex items-center cursor-pointer absolute right-6 md:right-10 top-5 md:top-8'>
      <span className='mr-2 text-white'>
        {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
      </span>
      <input
        type='checkbox'
        checked={isDarkMode}
        className='sr-only peer'
        onChange={darkModeSelector}
      />
      <div className="relative w-11 h-6 bg-scLightGreyColor ring-scGreenHoverColor peer-focus:outline-none peer-focus:ring-4 peer-focus:scGreenColor dark:peer-focus:scGreenColor rounded-full peer dark:bg-scDarkGreyColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-scLightGreyColor after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-scDarkGreyColor peer-checked:bg-scBrightDarkColor"></div>
    </label>
  );
}
