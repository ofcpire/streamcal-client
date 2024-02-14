import React from 'react';
import { useState } from 'react';
import ChannelItem from './ChannelItem';
import {
  getLikeChannel,
  isChannelLiked,
} from '../../lib/localStorage/likeChannel';
import sortChannelList from '../../lib/utils/sortChannelList';
import { LuArrowUpDown } from 'react-icons/lu';
import ChannelListSplash from './ChannelListSplash';

export default function ChannelList({
  channelListData,
}: {
  channelListData: ChannelInfoType[];
}) {
  const [sortRule, setSortRule] = useState('ab');

  const changeSortRuleHandler = () => {
    if (sortRule === 'ab') setSortRule('ba');
    else if (sortRule === 'ba') setSortRule('ab');
  };

  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center content-middle mx-2 md:mx-4'>
      <ChannelListSplash />
      {getLikeChannel().length > 0 ? (
        <article className='mb-2'>
          <h2 className='m-1 text-[16px] font-semibold md:text-lg'>
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
      <h2 className='m-1 text-[16px] font-semibold md:text-lg flex w-full justify-between md:justify-normal'>
        스트리머 목록
        <button
          onClick={changeSortRuleHandler}
          className='flex items-center md:ml-8 mr-4'>
          <LuArrowUpDown />
          {sortRule === 'ab' ? 'ㄱ-ㅎ' : 'ㅎ-ㄱ'}
        </button>
      </h2>
      <div>
        {sortChannelList(channelListData, sortRule).map((channelInfo) => {
          if (!isChannelLiked(channelInfo.channelId))
            return (
              <ChannelItem
                channelInfo={channelInfo}
                key={channelInfo.channelId}
              />
            );
          else return null;
        })}
      </div>
    </section>
  );
}
