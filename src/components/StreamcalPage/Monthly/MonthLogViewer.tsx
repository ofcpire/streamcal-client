import calGapFiller from '../../../lib/utils/streamcal/monthly/calGapFiller';
import logToCalArray from '../../../lib/utils/streamcal/monthly/logToCalArray';
import MonthLogViewerItem from './MonthLogViewerItem';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function MonthLogViewer({
  streamLogArray,
  metadata,
  channelInfo,
}: {
  streamLogArray: StreamLogType[];
  metadata: LogMetadataType;
  channelInfo: ChannelInfoType;
}) {
  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader flex justify-between'>
        스트리밍 기록
        <span className='text-base font-medium ml-2'>
          {dayjs(metadata.targetDate).format('YYYY년 M월')}
        </span>
      </h3>
      <div className='grid sm:grid-cols-7'>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => {
          return (
            <div
              className={
                'rounded font-semibold text-sm m-1 p-1 text-center hidden sm:inline-block ' +
                (day === 'SUN'
                  ? 'text-white bg-scBrightRedColor'
                  : 'text-scBrightDarkColor dark:text-scOffWhiteColor bg-white dark:bg-scDarkColor')
              }>
              {day}
            </div>
          );
        })}
        {calGapFiller(streamLogArray, 'start').map((ele, i) => {
          return (
            <div
              key={ele}
              className='rounded bg-scLightGreyColor dark:bg-scDarkColor m-1 hidden sm:block'>
              <span className='hidden'>{ele}</span>
            </div>
          );
        })}
        {logToCalArray(streamLogArray).map((dateLog, i) => {
          return (
            <MonthLogViewerItem
              dateLog={dateLog}
              createdAt={channelInfo.createdAt}
              today={metadata.serverTime}
              key={dateLog.key}
            />
          );
        })}
        {calGapFiller(streamLogArray, 'end').map((ele, i) => {
          return (
            <div
              key={ele}
              className='rounded bg-scLightGreyColor dark:bg-scDarkColor m-1 hidden sm:block'>
              <span className='hidden'>{ele}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
