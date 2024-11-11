import React, { useEffect, lazy, Suspense } from 'react';
import { useState } from 'react';
import processLogForViewer from '../../lib/utils/streamcal/daily/processLogForViewer';
import SkeletonStreamcalPage from './SkeletonStreamcalPage';
const ChannelInfo = lazy(() => import('./ChannelInfo'));
const DateLogChart = lazy(() => import('./Daily/DateLogChart'));
const DateLogViewer = lazy(() => import('./Daily/DateLogViewer'));
const TimeLogChart = lazy(() => import('./TimeLogChart'));
const LoadSelector = lazy(() => import('./LoadSelector'));
const MonthLogContainer = lazy(
  () => import('./Monthly/MonthLogContainer')
);

export default function StreamcalContainer({
  streamcalData,
  changeLogDate,
  changeLogType,
  isLoading,
}: {
  streamcalData: StreamcalType | undefined;
  changeLogDate: (date: string) => void;
  changeLogType: (date: string) => void;
  isLoading: boolean;
}) {
  const [dataHolder, setDataHolder] = useState<StreamcalType | undefined>(
    streamcalData
  );

  useEffect(() => {
    if (streamcalData) setDataHolder(streamcalData);
  }, [streamcalData]);

  return (
    <Suspense fallback={<SkeletonStreamcalPage />}>
      {dataHolder ? (
        <section className='w-screen md:max-w-screen-xl md:mx-4'>
          <ChannelInfo channelInfo={dataHolder.channelInfo} />
          <LoadSelector
            changeLogDate={changeLogDate}
            changeLogType={changeLogType}
            isLoading={isLoading}
            channelInfo={dataHolder.channelInfo}
            metadata={dataHolder.metadata}
          />
          {isLoading ? (
            <>
              <article className='sc-lightArticleSkeleton'></article>
              <article className='sc-lightArticleSkeleton'></article>
            </>
          ) : dataHolder.metadata.type === 'date' ? (
            <>
              <DateLogChart
                streamLogArray={dataHolder.log}
                metadata={dataHolder.metadata}
              />
              <DateLogViewer
                streamLogArray={processLogForViewer(dataHolder.log)}
              />
              <TimeLogChart
                metadata={dataHolder.metadata}
                streamLogArray={dataHolder.log}
              />
            </>
          ) : dataHolder.metadata.type === 'month' ? (
            <Suspense
              fallback={
                <>
                  <article className='sc-lightArticleSkeleton'></article>
                  <article className='sc-lightArticleSkeleton'></article>
                </>
              }>
              <MonthLogContainer
                streamLogArray={dataHolder.log}
                metadata={dataHolder.metadata}
                channelInfo={dataHolder.channelInfo}
              />
            </Suspense>
          ) : null}
        </section>
      ) : (
        <SkeletonStreamcalPage />
      )}
    </Suspense>
  );
}
