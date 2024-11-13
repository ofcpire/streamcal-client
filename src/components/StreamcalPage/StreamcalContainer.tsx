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
  isPlaceholderData,
}: {
  streamcalData: StreamcalType | undefined;
  changeLogDate: (date: string) => void;
  changeLogType: (date: string) => void;
  isPlaceholderData: boolean;
}) {
  return (
    <Suspense fallback={<SkeletonStreamcalPage />}>
      {streamcalData ? (
        <section className='w-screen md:max-w-screen-xl md:mx-4'>
          <ChannelInfo channelInfo={streamcalData.channelInfo} />
          <LoadSelector
            changeLogDate={changeLogDate}
            changeLogType={changeLogType}
            isLoading={isPlaceholderData}
            channelInfo={streamcalData.channelInfo}
            metadata={streamcalData.metadata}
          />
          {isPlaceholderData || !streamcalData ? (
            <>
              <article className='sc-lightArticleSkeleton'></article>
              <article className='sc-lightArticleSkeleton'></article>
            </>
          ) : streamcalData.metadata.type === 'date' ? (
            <Suspense
              fallback={
                <>
                  <article className='sc-lightArticleSkeleton'></article>
                  <article className='sc-lightArticleSkeleton'></article>
                </>
              }>
              <DateLogChart
                streamLogArray={streamcalData.log}
                metadata={streamcalData.metadata}
              />
              <DateLogViewer
                streamLogArray={processLogForViewer(streamcalData.log)}
              />
              <TimeLogChart
                metadata={streamcalData.metadata}
                streamLogArray={streamcalData.log}
              />
            </Suspense>
          ) : streamcalData.metadata.type === 'month' ? (
            <Suspense
              fallback={
                <>
                  <article className='sc-lightArticleSkeleton'></article>
                  <article className='sc-lightArticleSkeleton'></article>
                </>
              }>
              <MonthLogContainer
                streamLogArray={streamcalData.log}
                metadata={streamcalData.metadata}
                channelInfo={streamcalData.channelInfo}
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
