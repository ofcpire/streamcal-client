import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import getChannelList from '../lib/api/getChannelList';
import ChannelContainer from '../components/channelPage/ChannelContainer';
import { ErrorModalContext } from '../components/global/ErrorModalProvider';
import axios from 'axios';

export default function ChannelPage() {
  const { makeErrorModal, closeErrorModal } =
    useContext(ErrorModalContext);
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['getChannelList'],
    queryFn: async () => {
      try {
        const data = await getChannelList();
        closeErrorModal();
        return data;
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
