import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const nav = useNavigate();
  const goToListHandler = () => {
    nav('');
  };
  return (
    <header className='flex p-4 md:p-6 fixed w-screen z-50 sc-darkModeGreenBg justify-center md:justify-start content-center md:justify-right min-w-[320px]'>
      <h1 className=''>
        <button
          onClick={goToListHandler}
          className='font-doHyeon text-2xl md:text-4xl text-white'>
          STREAMCAL
        </button>
      </h1>
      <DarkModeToggle />
    </header>
  );
}
