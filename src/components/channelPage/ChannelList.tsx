import React from 'react';
import ChannelItem from './ChannelItem';

export default function ChannelList({
  channelListData,
}: {
  channelListData: ChannelInfoType[];
}) {
  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center content-middle'>
      <div className='font-bold text-lg md:text-3xl text-brightDarkColor text-center m-4 md:mt-0'>
        스트리머의 방송 기록 쉽게 찾아보기.
      </div>
      <div>
        {channelListData.map((channelInfo) => (
          <ChannelItem
            channelInfo={channelInfo}
            key={channelInfo.channelId}
          />
        ))}
      </div>
    </section>
  );
}
