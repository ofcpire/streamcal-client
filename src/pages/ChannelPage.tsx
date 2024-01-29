import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChannelList from '../components/channelPage/ChannelList';

export default function ChannelPage() {
  const [channelListData, setChannelListData] = useState<
    ChannelInfoType[]
  >(useLoaderData() as ChannelInfoType[]);
  return <ChannelList channelListData={channelListData} />;
}
