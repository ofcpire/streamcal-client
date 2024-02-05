import getStreamcal from '../../lib/api/getStreamcal';
import { useState } from 'react';
import isoToYMDString from '../../lib/utils/isoToYMDString';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function DateSelector({
  setStreamcalData,
  channelInfo,
}: {
  setStreamcalData: React.Dispatch<React.SetStateAction<StreamcalType>>;
  channelInfo: ChannelInfoType;
}) {
  const [date, setDate] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setDate(e.target.value);
    setIsChanged(true);
  };

  const loadByDateHandler = () => {
    getStreamcal(channelInfo.channelId, date).then((newStreamcalData) => {
      setStreamcalData(newStreamcalData);
    });
    setIsChanged(false);
  };

  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader'>날짜 선택</h3>
      <div className='date-input-wrapper flex'>
        <input
          className='rounded-lg p-1 mr-2'
          type='date'
          onChange={dateChangeHandler}
          id='streamcal-date'
          min={isoToYMDString(channelInfo.createdAt)}
          max={dayjs().format('YYYY-MM-DD')}></input>
        <button
          onClick={loadByDateHandler}
          className='sc-lightButton disabled:bg-scDarkGreyColor'
          disabled={!isChanged}>
          불러오기
        </button>
      </div>
    </article>
  );
}
