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
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const loadByDateHandler = () => {
    getStreamcal(channelInfo.channelId, date).then((newStreamcalData) => {
      setStreamcalData(newStreamcalData);
    });
  };

  return (
    <>
      <input
        type='date'
        onChange={dateChangeHandler}
        id='streamcal-date'
        min={isoToYMDString(channelInfo.createdAt)}
        max={dayjs().format('YYYY-MM-DD')}></input>
      <button onClick={loadByDateHandler}>Load by date</button>
    </>
  );
}
