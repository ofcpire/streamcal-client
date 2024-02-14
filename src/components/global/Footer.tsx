import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  const nav = useNavigate();
  const footerNavHandler = () => {
    nav('');
  };

  return (
    <footer className='p-4 md:p-6 text-center md:text-left bg-brightDarkColor text-white'>
      <span className='block m-2 flex items-center'>
        2024 STREAMCAL <FaRegCopyright />
      </span>
      <span className='block m-2'>
        STREAMCAL은 수익을 창출하지 않습니다.
      </span>
    </footer>
  );
}
