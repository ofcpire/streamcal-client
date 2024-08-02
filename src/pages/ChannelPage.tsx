import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import getChannelList from '../lib/api/getChannelList';
import ChannelContainer from '../components/channelPage/ChannelContainer';
import { ErrorModalContext } from '../components/global/ErrorModalProvider';
import axios from 'axios';

export default function ChannelPage() {
  const { makeErrorModal } = useContext(ErrorModalContext);
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['getChannelList'],
    queryFn: async () => {
      try {
        return await getChannelList();
      } catch (err) {
        if (axios.isAxiosError(err)) {
          makeErrorModal(err, refetch);
          return Promise.resolve(undefined);
        } else throw new Error(err as string);
      }
    },
    retry: 1,
    throwOnError: false,
  });

  return <ChannelContainer data={data} isLoading={isLoading} />;
}
