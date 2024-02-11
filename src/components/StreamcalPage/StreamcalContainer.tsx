import React from 'react';
import { useState } from 'react';
import ChannelInfo from './ChannelInfo';
import DateSelector from './DateSelector';
import LogChart from './LogChart';
import LogViewer from './LogViewer';

export default function StreamcalContainer({
  streamcalData,
  setStreamcalData,
}: {
  streamcalData: StreamcalType;
  setStreamcalData: React.Dispatch<React.SetStateAction<StreamcalType>>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className='w-screen md:max-w-screen-xl md:mx-4'>
      <ChannelInfo channelInfo={streamcalData.channelInfo} />
      <DateSelector
        setStreamcalData={setStreamcalData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        channelInfo={streamcalData.channelInfo}
        metadata={streamcalData.metadata}
      />
      {isLoading ? (
        <>
          <article className='sc-lightArticleSkeleton'></article>
          <article className='sc-lightArticleSkeleton'></article>
        </>
      ) : (
        <>
          <LogChart streamLogArray={streamcalData.log} />
          <LogViewer streamLogArray={streamcalData.log} />
        </>
      )}
    </section>
  );
}
