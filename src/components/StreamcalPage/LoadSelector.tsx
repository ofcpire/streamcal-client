import { useState } from 'react';
import DateSelector from './DateSelector';
import MonthSelector from './MonthSelector';

export default function LoadSelector({
  changeLogDate,
  changeLogType,
  isLoading,
  channelInfo,
  metadata,
}: {
  changeLogDate: (date: string) => void;
  changeLogType: (date: string) => void;
  isLoading: boolean;
  channelInfo: ChannelInfoType;
  metadata: LogMetadataType;
}) {
  const [tab, setTab] = useState(metadata.type);
  const tabChangeHandler = (value: string) => {
    setTab(value);
  };

  return (
    <article className='pb-0 mx-4 mt-4 text-sm'>
      <button
        onClick={() => tabChangeHandler('date')}
        id='view-date-button'
        className={
          'rounded-t-lg p-1 md:p-2 px-6 md:px-10  font-semibold ' +
          (tab === 'date'
            ? 'bg-scOffWhiteColor text-brightDarkColor'
            : 'bg-scLightGreyColor text-scDarkGreyColor hover:bg-scLightGreyHoverColor [&>*]:opacity-50')
        }>
        <span className=''>일별</span>
      </button>
      <button
        onClick={() => tabChangeHandler('month')}
        id='view-month-button'
        className={
          'rounded-t-lg p-1 md:p-2 px-6 md:px-10 font-semibold ' +
          (tab === 'month'
            ? 'bg-scOffWhiteColor text-brightDarkColor'
            : 'bg-scLightGreyColor text-scDarkGreyColor hover:bg-scLightGreyHoverColor [&>*]:opacity-50')
        }>
        <span>월별</span>
      </button>
      {tab === 'date' && (
        <DateSelector
          changeLogDate={changeLogDate}
          changeLogType={changeLogType}
          isLoading={isLoading}
          channelInfo={channelInfo}
          metadata={metadata}
        />
      )}
      {tab === 'month' && (
        <MonthSelector
          isLoading={isLoading}
          metadata={metadata}
          channelInfo={channelInfo}
          changeLogType={changeLogType}
          changeLogDate={changeLogDate}
        />
      )}
    </article>
  );
}
