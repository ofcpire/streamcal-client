import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const nav = useNavigate();
  const footerNavHandler = () => {
    nav('');
  };

  return (
    <footer className='p-4 md:p-6 text-center md:text-left bg-brightDarkColor text-white'>
      <span className='block m-2'>2024 STREAMCAL ⓒ</span>
      <span className='block m-2'>
        STREAMCAL은 수익을 창출하지 않습니다.
      </span>
    </footer>
  );
}
