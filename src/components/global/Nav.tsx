import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaX } from 'react-icons/fa6';
import { isBooleanObject } from 'util/types';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mobileNavSwitch = useCallback((set?: boolean) => {
    if (set === undefined) setIsNavOpen((prev) => !prev);
    else setIsNavOpen(set);
  }, []);

  return (
    <>
      <div className='hidden sm:block'>
        <NavList mobileNavSwitch={mobileNavSwitch} />
      </div>
      <button
        className='sm:hidden inline-flex items-center text-white font-semibold hover:text-scOffWhiteColor absolute left-6'
        onClick={() => mobileNavSwitch(true)}>
        <FaBars />
      </button>
      {isNavOpen && (
        <div className='sm:hidden w-screen h-screen sm:w-0 sm:h-0 absolute inset-0 bg-scOffWhiteColor dark:bg-scBrightDarkColor z-50'>
          <button
            onClick={() => mobileNavSwitch(false)}
            className='m-6 text-scBrightDarkColor dark:text-scOffWhiteColor hover:text-scGreyColor'>
            <FaX />
          </button>
          <NavList mobileNavSwitch={mobileNavSwitch} />
        </div>
      )}
    </>
  );
}

const NavList = React.memo(function NavList({
  mobileNavSwitch,
}: {
  mobileNavSwitch: (set?: boolean) => void;
}) {
  const navigate = useNavigate();
  const goPageByValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    mobileNavSwitch(false);
    navigate(e.currentTarget.value);
  };
  return (
    <>
      <div className='sm:hidden px-6 font-semibold text-2xl text-scGreenColor dark:text-scDarkModeGreenColor'>
        메뉴
      </div>
      <ul className='p-6 sm:p-0 pt-0 flex-row sm:ml-4 text-scBrightDarkColor sm:text-white dark:text-scOffWhiteColor text-2xl font-normal sm:text-base sm:font-semibold absolute sm:relative sm:flex sm:h-auto sm:w-auto'>
        <li className='my-4 sm:my-0 sm:mx-4 hover:text-scGreyColor '>
          <button value={''} onClick={goPageByValue}>
            채널
          </button>
        </li>
        <li className=' my-4 sm:my-0 sm:mx-4 hover:text-scGreyColor '>
          <button value={'category'} onClick={goPageByValue}>
            카테고리
          </button>
        </li>
      </ul>
    </>
  );
});
