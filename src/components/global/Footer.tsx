import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function Footer() {
  const nav = useNavigate();
  const now = dayjs();

  return (
    <footer className='flex flex-col items-center bg-scBrightDarkColor p-4 text-center text-white md:items-start md:p-6 md:text-left'>
      <span className='m-1 block flex items-center'>
        {now.year()} STREAMCAL <FaRegCopyright />
      </span>
      <span className='m-1 block'>
        STREAMCAL은 수익을 창출하지 않습니다.
      </span>
    </footer>
  );
}
