import React, { useEffect } from 'react';
import { useState } from 'react';
import ChannelInfo from './ChannelInfo';
import DateLogChart from './Daily/DateLogChart';
import DateLogViewer from './Daily/DateLogViewer';
import LoadSelector from './LoadSelector';
import MonthLogContainer from './Monthly/MonthLogContainer';
import TimeLogChart from './TimeLogChart';

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
    <>
      {dataHolder && (
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
              <DateLogViewer streamLogArray={dataHolder.log} />
              <TimeLogChart
                metadata={dataHolder.metadata}
                streamLogArray={dataHolder.log}
              />
            </>
          ) : dataHolder.metadata.type === 'month' ? (
            <MonthLogContainer
              streamLogArray={dataHolder.log}
              metadata={dataHolder.metadata}
              channelInfo={dataHolder.channelInfo}
            />
          ) : null}
        </section>
      )}
    </>
  );
}
