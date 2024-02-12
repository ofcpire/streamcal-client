import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StreamcalContainer from '../components/StreamcalPage/StreamcalContainer';
import { useQuery } from '@tanstack/react-query';
import getStreamcal from '../lib/api/getStreamcal';
import SkeletonStreamcalPage from '../components/StreamcalPage/SkeletonStreamcalPage';

export default function StreamcalPage() {
  // );
  const [isInitial, setIsInitial] = useState(true);
  const { channelId } = useParams();
  const [targetDate, setTargetDate] = useState<string | null>(null);
  const { isLoading, data } = useQuery({
    queryKey: [channelId, targetDate],
    queryFn: async () => {
      if (channelId && targetDate)
        return await getStreamcal(channelId, targetDate);
      else if (channelId) return await getStreamcal(channelId);
      else throw new Error();
    },
    retry: 1,
    throwOnError: true,
  });
  const changeLogDate = (date: string) => {
    setTargetDate(date);
  };

  useEffect(() => {
    if (data) setIsInitial(false);
  }, [data]);

  return (
    <>
      {isLoading && isInitial ? (
        <SkeletonStreamcalPage />
      ) : (
        <StreamcalContainer
          isLoading={isLoading}
          streamcalData={data}
          changeLogDate={changeLogDate}
        />
      )}
    </>
  );
}
