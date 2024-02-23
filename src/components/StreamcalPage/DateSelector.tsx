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
  const today = dayjs();
  const [date, setDate] = useState(isoToYMDString(today.toISOString()));
  const [isChanged, setIsChanged] = useState(false);
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setIsChanged(true);
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
          className='rounded-lg p-1 mr-2'
          type='date'
          onChange={dateChangeHandler}
          id='streamcal-date'
          min={isoToYMDString(channelInfo.createdAt)}
          max={dayjs().format('YYYY-MM-DD')}></input>
        <button
          onClick={loadByDateHandler}
          className='sc-lightButton disabled:bg-scDarkGreyColor'
          disabled={
            metadata.type === 'date' ? !isChanged || isLoading : false
          }>
          {isLoading ? '불러오는 중' : '불러오기'}
        </button>
      </div>
    </article>
  );
}
