import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StreamcalContainer from '../components/StreamcalPage/StreamcalContainer';
import { useQuery } from '@tanstack/react-query';
import getStreamcal from '../lib/api/getStreamcal';
import SkeletonStreamcalPage from '../components/StreamcalPage/SkeletonStreamcalPage';
import StreamcalHelmet from '../components/StreamcalPage/StreamcalHelmet';
import { ErrorModalContext } from '../components/global/ErrorModalProvider';
import axios from 'axios';

export default function StreamcalPage() {
  const { makeErrorModal } = useContext(ErrorModalContext);
  const location = useLocation();
  const [isInitial, setIsInitial] = useState(true);
  const [logType, setLogType] = useState<string | null>(
    new URLSearchParams(location.search).get('type')
  );
  const { channelId } = useParams();
  const [targetDate, setTargetDate] = useState<string | null>(
    new URLSearchParams(location.search).get('date')
  );
  const { isLoading, data, refetch } = useQuery({
    queryKey: [channelId, logType, targetDate],
    queryFn: async () => {
      if (!channelId) throw new Error();
      try {
        return await getStreamcal(channelId, targetDate, logType);
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

  const changeLogDate = (date: string) => {
    setTargetDate(date);
  };

  const changeLogType = (type: string) => {
    setLogType(type);
  };

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
      {isLoading && isInitial && data ? (
        <SkeletonStreamcalPage />
      ) : (
        <>
          <StreamcalContainer
            isLoading={isLoading}
            streamcalData={data}
            changeLogDate={changeLogDate}
            changeLogType={changeLogType}
          />
          <StreamcalHelmet channelInfo={data?.channelInfo} />
        </>
      )}
    </>
  );
}
