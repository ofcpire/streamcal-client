import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

interface MonthLogViewerItemProps {
  dateLog: {
    date: number;
    log: StreamLogType[];
    key: string;
    type: string;
  };
  createdAt: string;
  today: string;
}

export default function MonthLogViewerItem({
  dateLog,
  createdAt,
  today,
}: MonthLogViewerItemProps) {
  const categories = Array.from(
    new Set(
      dateLog.log
        .map((log) => {
          if (log.status === 'unknown') return '데이터 없음';
          else if (log.status !== 'OPEN') return;
          else if (log.liveCategory === '') return '카테고리 없음';
          else return log.liveCategoryValue;
        })
        .filter((e) => e)
    )
  );
  return (
    <div className='flex sm:flex-col sm:min-h-[100px] rounded bg-white dark:bg-scDarkColor m-1 '>
      <span
        className={
          'block border-r sm:border-b sm:border-r-0 dark:border-scBrightDarkColor text-center rounded-l sm:rounded-t sm:rounded-bl-none text-sm font-semibold p-2 sm:p-0 min-w-[40px]' +
          (dateLog.type === 's'
            ? 'text-white bg-scBrightRedColor sm:text-scBrightRedColor sm:bg-white dark:bg-scDarkColor'
            : 'text-scBrightDarkColor dark:text-scOffWhiteColor bg-white dark:bg-scDarkColor')
        }>
        {dateLog.date}
      </span>
      <div className='flex sm:flex-col m-1 flex-wrap items-center sm:items-start'>
        {dateLog.key === dayjs(createdAt).format('YYYYMMDD') ? (
          <span className='sc-smInfoBox m-0 mr-1 sm:mr-0'>기록 시작</span>
        ) : dateLog.key === dayjs(today).format('YYYYMMDD') ? (
          <span className='sc-smInfoBox m-0 mr-1 sm:mr-0'>오늘</span>
        ) : null}
        {categories.map((log, i) => {
          return (
            <span className='inline-block text-xs text-wrap pr-1 sm:pr-0'>
              {log}
              {i !== categories.length - 1 ? (
                <span className='sm:hidden'>,</span>
              ) : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}
