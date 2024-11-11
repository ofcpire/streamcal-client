import React from 'react';
import { useState, useEffect } from 'react';
import { IoSearch, IoCloseCircle } from 'react-icons/io5';
import useSearchDebounce from '../../../hooks/useSearchDebounce';

export default function CategorySearch({
  setKeyword,
}: {
  setKeyword: (keyword: string) => void;
}) {
  const { debouncedString, inputString, setInputString, onChange } =
    useSearchDebounce(500);
  const cancelSearchHandler = () => {
    setInputString('');
    setKeyword('');
  };
  useEffect(() => {
    setKeyword(debouncedString);
  }, [debouncedString]);
  return (
    <div className='sc-lightArticle p-2 my-0 sm:my-4 bg-scOffWhiteColor dark:bg-scBrightDarkColor flex flex-row items-center min-w-[50px]'>
      <input
        onChange={onChange}
        className='flex-grow bg-transparent focus:outline-none min-w-[40px]'
        placeholder=''
        value={inputString}
      />
      {inputString ? (
        <button>
          <IoCloseCircle
            onClick={cancelSearchHandler}
            className='flex-shrink-0'
          />
        </button>
      ) : (
        <IoSearch className='flex-shrink-0 ' />
      )}
    </div>
  );
}
