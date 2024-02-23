import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StreamcalContainer from '../components/StreamcalPage/StreamcalContainer';
import { useQuery } from '@tanstack/react-query';
import getStreamcal from '../lib/api/getStreamcal';
import SkeletonStreamcalPage from '../components/StreamcalPage/SkeletonStreamcalPage';
import StreamcalHelmet from '../components/StreamcalPage/StreamcalHelmet';

export default function StreamcalPage() {
  // );
  const location = useLocation();
  const [isInitial, setIsInitial] = useState(true);
  const [logType, setLogType] = useState('date');
  const { channelId } = useParams();
  const [targetDate, setTargetDate] = useState<string | null>(
    new URLSearchParams(location.search).get('date')
  );
  const { isLoading, data } = useQuery({
    queryKey: [channelId, logType, targetDate],
    queryFn: async () => {
      if (channelId && targetDate)
        return await getStreamcal(channelId, targetDate, logType);
      else if (channelId) return await getStreamcal(channelId);
      else throw new Error();
    },
    retry: 1,
    throwOnError: true,
  });
  const changeLogDate = (date: string) => {
    setTargetDate(date);
  };

  const changeLogType = (type: string) => {
    setLogType(type);
  };

  useEffect(() => {
    if (data) setIsInitial(false);
  }, [data]);

  return (
    <>
      {isLoading && isInitial ? (
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
