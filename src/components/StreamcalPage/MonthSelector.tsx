import React from 'react';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import makeYearOptions from '../../lib/utils/streamcal/monthly/makeYearOptions';
import makeMonthOptions from '../../lib/utils/streamcal/monthly/makeMonthOptions';

export default function MonthSelector({
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
  const [date, setDate] = useState({
    year: today.year(),
    month: today.month() + 1,
  });
  const [isChanged, setIsChanged] = useState(true);
  const [yearArray, setYearArray] = useState<number[]>(
    makeYearOptions(channelInfo.createdAt, today.toISOString())
  );
  const [monthArray, setMonthArray] = useState<number[]>([]);
  useEffect(() => {
    setYearArray(
      makeYearOptions(channelInfo.createdAt, today.toISOString())
    );
  }, [channelInfo.createdAt]);

  useEffect(() => {
    setMonthArray(
      makeMonthOptions(
        date.year,
        channelInfo.createdAt,
        today.toISOString()
      )
    );
  }, [date.year]);

  const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => {
      prev.year = Number(e.target.value);
      return { ...prev };
    });
    setIsChanged(true);
  };

  const monthChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => {
      prev.month = Number(e.target.value);
      return { ...prev };
    });
    setIsChanged(true);
  };

  const loadByDateHandler = async () => {
    changeLogDate(`${date.year}-${date.month}-1`);
    changeLogType('month');
    setIsChanged(false);
  };

  return (
    <>
      <article className='sc-lightArticle m-0 flex items-center justify-between md:justify-start flex-wrap rounded-tl-none'>
        <h3 className='sc-articleHeader my-0 mr-4'>기간 선택</h3>
        <div className='date-input-wrapper flex'>
          <select
            className='rounded-lg p-1 mr-2'
            onChange={yearChangeHandler}
            value={date.year}>
            {yearArray.map((y) => (
              <option key={`${y}y`} value={y}>
                {y}년
              </option>
            ))}
          </select>
          <select
            className='rounded-lg p-1 mr-2'
            onChange={monthChangeHandler}
            value={date.month}>
            {monthArray.map((m) => (
              <option key={`${m}m`} value={m}>
                {m}월
              </option>
            ))}
          </select>
          <button
            onClick={loadByDateHandler}
            className='sc-lightButton disabled:bg-scDarkGreyColor'
            disabled={
              metadata.type === 'month' ? !isChanged || isLoading : false
            }>
            {isLoading ? '불러오는 중' : '불러오기'}
          </button>
        </div>
      </article>
    </>
  );
}
