import React from 'react';
import { useState, useEffect } from 'react';
import { IoSearch, IoCloseCircle } from 'react-icons/io5';

export default function ChannelSearch({
  setChannelList,
  originalChannelListData,
}: {
  setChannelList: React.Dispatch<React.SetStateAction<ChannelInfoType[]>>;
  originalChannelListData: ChannelInfoType[];
}) {
  const [searchString, setSearchString] = useState('');

  const searchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    setChannelList(() => {
      if (!searchString) {
        return [...originalChannelListData];
      } else {
        const testValue = searchString.toLowerCase();
        const filteredChannel = originalChannelListData.filter(
          (channel) => {
            return channel.channelName.toLowerCase().includes(testValue);
          }
        );
        return filteredChannel;
      }
    });
  }, [searchString]);

  const cancelSearchHandler = () => {
    setSearchString('');
  };

  return (
    <div className='sc-lightArticle p-2 m-0 bg-scOffWhiteColor flex flex-row items-center min-w-[50px]'>
      <input
        onChange={searchInputChangeHandler}
        className='flex-grow bg-transparent focus:outline-none min-w-[40px]'
        placeholder=''
        value={searchString}
      />
      {searchString ? (
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
