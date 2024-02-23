import calGapFiller from '../../../lib/utils/streamcal/monthly/calGapFiller';
import logToCalArray from '../../../lib/utils/streamcal/monthly/logToCalArray';
import MonthLogViewerItem from './MonthLogViewerItem';

export default function MonthLogViewer({
  streamLogArray,
}: {
  streamLogArray: StreamLogType[];
}) {
  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader'>스트리밍 기록</h3>
      <div className='grid sm:grid-cols-7'>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => {
          return (
            <div
              className={
                'rounded font-semibold text-sm m-1 p-1 text-center hidden sm:inline-block ' +
                (day === 'SUN'
                  ? 'text-white bg-scBrightRedColor'
                  : 'text-brightDarkColor bg-white')
              }>
              {day}
            </div>
          );
        })}
        {calGapFiller(streamLogArray, 'start').map((ele, i) => {
          return (
            <div
              key={ele}
              className='rounded bg-scLightGreyColor m-1 hidden sm:block'>
              <span className='hidden'>{ele}</span>
            </div>
          );
        })}
        {logToCalArray(streamLogArray).map((dateLog, i) => {
          return (
            <MonthLogViewerItem dateLog={dateLog} key={dateLog.key} />
          );
        })}
        {calGapFiller(streamLogArray, 'end').map((ele, i) => {
          return (
            <div
              key={ele}
              className='rounded bg-scLightGreyColor m-1 hidden sm:block'>
              <span className='hidden'>{ele}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
