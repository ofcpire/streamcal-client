import React, { useEffect } from 'react';
import { useState } from 'react';
import ChannelInfo from './ChannelInfo';
import DateSelector from './DateSelector';
import LogChart from './LogChart';
import LogViewer from './LogViewer';

export default function StreamcalContainer({
  streamcalData,
  changeLogDate,
  isLoading,
}: {
  streamcalData: StreamcalType | undefined;
  changeLogDate: (date: string) => void;
  isLoading: boolean;
}) {
  const [dataHolder, setDataHolder] = useState<StreamcalType | undefined>(
    streamcalData
  );

  useEffect(() => {
    if (streamcalData) setDataHolder(streamcalData);
  }, [streamcalData]);

  return (
    <>
      {dataHolder && (
        <section className='w-screen md:max-w-screen-xl md:mx-4'>
          <ChannelInfo channelInfo={dataHolder.channelInfo} />
          <DateSelector
            changeLogDate={changeLogDate}
            isLoading={isLoading}
            channelInfo={dataHolder.channelInfo}
            metadata={dataHolder.metadata}
          />
          {isLoading ? (
            <>
              <article className='sc-lightArticleSkeleton'></article>
              <article className='sc-lightArticleSkeleton'></article>
            </>
          ) : (
            <>
              <LogChart streamLogArray={dataHolder.log} />
              <LogViewer streamLogArray={dataHolder.log} />
            </>
          )}
        </section>
      )}
    </>
  );
}
