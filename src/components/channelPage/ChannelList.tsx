import React from 'react';
import ChannelItem from './ChannelItem';
import {
  getLikeChannel,
  isChannelLiked,
} from '../../lib/localStorage/likeChannel';

export default function ChannelList({
  channelListData,
}: {
  channelListData: ChannelInfoType[];
}) {
  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center content-middle mx-2 md:mx-4'>
      <div className='font-bold text-lg md:text-3xl text-brightDarkColor text-center m-4 md:mt-0'>
        스트리머의 기록을 쉽게 모아 보기.
      </div>
      {getLikeChannel().length > 0 ? (
        <article className='mb-4'>
          <h2 className='sc-articleHeader'>즐겨 찾는 스트리머</h2>
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
            })}
          </div>
        </article>
      ) : null}
      <h2 className='sc-articleHeader'>스트리머 목록</h2>
      <div>
        {channelListData.map((channelInfo) => {
          if (!isChannelLiked(channelInfo.channelId))
            return (
              <ChannelItem
                channelInfo={channelInfo}
                key={channelInfo.channelId}
              />
            );
        })}
      </div>
    </section>
  );
}
