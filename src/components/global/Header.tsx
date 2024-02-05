import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();
  const goToListHandler = () => {
    nav('');
  };

  return (
    <header className='p-4  md:p-6 text-center md:text-left bg-scGreenColor'>
      <h1>
        <button
          onClick={goToListHandler}
          className='font-doHyeon text-2xl md:text-4xl text-white'>
          STREAMCAL
        </button>
      </h1>
    </header>
  );
}
