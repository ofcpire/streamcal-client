import React from 'react';
import ChannelList from '../components/channelPage/ChannelList';
import SkeletonChannelPage from '../components/channelPage/SekeletonChannelPage';
import { useQuery } from '@tanstack/react-query';
import getChannelList from '../lib/api/getChannelList';

export default function ChannelPage() {
  const { isLoading, data } = useQuery({
    queryKey: ['getChannelList'],
    queryFn: () => {
      return getChannelList();
    },
    retry: 1,
    throwOnError: true,
  });

  return (
    <>
      {isLoading ? (
        <SkeletonChannelPage />
      ) : data ? (
        <ChannelList channelListData={data} />
      ) : null}
    </>
  );
}
