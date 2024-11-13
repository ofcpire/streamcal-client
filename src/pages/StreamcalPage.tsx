import React, { useCallback, useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StreamcalContainer from '../components/streamcalPage/StreamcalContainer';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import getStreamcal from '../lib/api/getStreamcal';
import StreamcalHelmet from '../components/streamcalPage/StreamcalHelmet';
import { ErrorModalContext } from '../components/global/ErrorModalProvider';
import axios from 'axios';

export default function StreamcalPage() {
  const { makeErrorModal, closeErrorModal } =
    useContext(ErrorModalContext);
  const location = useLocation();
  const [isInitial, setIsInitial] = useState(true);
  const [logType, setLogType] = useState<string | null>(
    new URLSearchParams(location.search).get('type')
  );
  const { channelId } = useParams();
  const [targetDate, setTargetDate] = useState<string | null>(
    new URLSearchParams(location.search).get('date')
  );
  const { data, refetch, isPlaceholderData } = useQuery({
    queryKey: [channelId, logType, targetDate],
    queryFn: async () => {
      if (!channelId) throw new Error();
      try {
        const data = await getStreamcal(channelId, targetDate, logType);
        closeErrorModal();
        return data;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          makeErrorModal(err, refetch);
          return Promise.resolve(undefined);
        } else throw new Error(err as string);
      }
    },
    placeholderData: keepPreviousData,
    retry: 1,
    throwOnError: false,
  });

  const changeLogDate = useCallback((date: string) => {
    setTargetDate(date);
  }, []);

  const changeLogType = useCallback((type: string) => {
    setLogType(type);
  }, []);

  useEffect(() => {
    if (data) setIsInitial(false);
    if ((logType || targetDate) && data)
      window.history.replaceState(
        '',
        '',
        `?type=${logType}&date=${targetDate}`
      );
  }, [data]);

  return (
    <>
      <StreamcalContainer
        isPlaceholderData={isPlaceholderData}
        streamcalData={data}
        changeLogDate={changeLogDate}
        changeLogType={changeLogType}
      />
      <StreamcalHelmet channelInfo={data?.channelInfo} />
    </>
  );
}
