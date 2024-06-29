import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getChannelList from '../lib/api/getChannelList';
import ChannelContainer from '../components/channelPage/ChannelContainer';

export default function ChannelPage() {
  const { isLoading, data } = useQuery({
    queryKey: ['getChannelList'],
    queryFn: () => {
      return getChannelList();
    },
    retry: 1,
    throwOnError: true,
  });

  return <ChannelContainer data={data} isLoading={isLoading} />;
}
