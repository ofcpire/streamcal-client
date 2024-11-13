import React, { useEffect, useCallback } from 'react';
import { useState } from 'react';
import ChannelItem from './ChannelItem';
import {
  getLikeChannel,
  isChannelLiked,
} from '../../lib/localStorage/likeChannel';
import sortChannelList from '../../lib/utils/sortChannelList';
import { LuArrowUpDown } from 'react-icons/lu';
import ChannelSearch from './ChannelSearch';

export default function ChannelList({
  channelListData,
}: {
  channelListData: ChannelInfoType[];
}) {
  const [channelList, setChannelList] = useState([...channelListData]);
  const [sortRule, setSortRule] = useState('ab');

  const changeSortRuleHandler = () => {
    setSortRule((prev: string) => {
      if (prev === 'ab') return 'ba';
      else return 'ab';
    });
  };
  useEffect(() => {}, [channelListData]);

  return (
    <>
      {getLikeChannel().length > 0 ? (
        <article className='md:mb-2 w-full'>
          <h2 className='sc-darkModeText m-1 text-[16px] font-semibold md:text-lg '>
            즐겨 찾는 스트리머
          </h2>
          <div>
            {getLikeChannel().map((channelId) => {
              const channelInfo = channelListData.find(
                (channelInfo) => channelInfo.channelId === channelId
              );
              if (channelInfo)
                return (
                  <ChannelItem
                    channelInfo={channelInfo}
                    key={channelInfo.channelId}
                  />
                );
              else return null;
            })}
          </div>
        </article>
      ) : null}
      <article className='w-full'>
        <div className='m-1 md:mb-2 text-[16px] font-semibold md:text-lg flex flex-col md:flex-row items-center justify-between md:justify-normal'>
          <h2 className='sc-darkModeText flex w-full md:w-fit mb-3 md:mb-0'>
            스트리머 목록
          </h2>
          <div className='flex flex-row w-full px-1 md:w-fit justify-between'>
            <button
              onClick={changeSortRuleHandler}
              className='sc-darkModeText flex items-center md:ml-8 md:mr-4 mr-2 whitespace-nowrap'>
              <LuArrowUpDown />
              {sortRule === 'ab' ? 'ㄱ-ㅎ' : 'ㅎ-ㄱ'}
            </button>
            <ChannelSearch
              setChannelList={setChannelList}
              originalChannelListData={channelListData}
            />
          </div>
        </div>
        <div>
          {sortChannelList(channelList, sortRule).map((channelInfo) => {
            return (
              <ChannelItem
                channelInfo={channelInfo}
                key={channelInfo.channelId}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
