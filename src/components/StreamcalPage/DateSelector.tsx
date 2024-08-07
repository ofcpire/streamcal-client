import { useState } from 'react';
import isoToYMDString from '../../lib/utils/isoToYMDString';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function DateSelector({
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
  const today = dayjs(metadata.serverTime);
  const [date, setDate] = useState(today.format('YYYY-MM-DD'));
  const [isChanged, setIsChanged] = useState(
    isoToYMDString(metadata.targetDate) !== date
  );

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setIsChanged(e.target.value !== metadata.targetDate);
  };

  const loadByDateHandler = async () => {
    changeLogDate(date);
    changeLogType('date');
    setIsChanged(false);
  };

  return (
    <article className='sc-lightArticle m-0 flex items-center justify-between md:justify-start flex-wrap rounded-tl-none'>
      <h3 className='sc-articleHeader my-0 mr-4'>날짜 선택</h3>
      <div className='date-input-wrapper flex'>
        <input
          value={date}
          className='dark:bg-scDarkColor rounded-lg p-1 mr-2'
          type='date'
          onChange={dateChangeHandler}
          id='streamcal-date'
          min={isoToYMDString(channelInfo.createdAt)}
          max={dayjs(metadata.serverTime).format('YYYY-MM-DD')}></input>
        <button
          onClick={loadByDateHandler}
          className='sc-lightButton disabled:bg-scDarkGreyColor'
          disabled={
            metadata.type === 'date' || isLoading ? !isChanged : false
          }>
          {isLoading ? '불러오는 중' : '불러오기'}
        </button>
      </div>
    </article>
  );
}
