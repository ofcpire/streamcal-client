import React from 'react';
import ChannelItem from './ChannelItem';

export default function ChannelList({
  channelListData,
}: {
  channelListData: ChannelInfoType[];
}) {
  return (
    <section>
      {channelListData.map((channelInfo) => (
        <ChannelItem
          channelInfo={channelInfo}
          key={channelInfo.channelId}
        />
      ))}
    </section>
  );
}
