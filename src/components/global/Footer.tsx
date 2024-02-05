import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const nav = useNavigate();
  const footerTempHandler = () => {
    nav('');
  };

  return (
    <footer className='p-4  md:p-6 text-center md:text-left bg-brightDarkColor text-white'>
      2024 STREAMCALⓒ
    </footer>
  );
}
