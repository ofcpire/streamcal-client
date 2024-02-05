import timestampToKo from '../../lib/utils/timestampToKo';
import underBarRemover from '../../lib/utils/underBarRemover';

export default function LogViewerItem({
  streamLog,
}: {
  streamLog: StreamLogType;
}) {
  const boxColorByStatus =
    streamLog.status === 'OPEN'
      ? 'sc-smInfoBox'
      : streamLog.status === 'CLOSE'
      ? 'sc-smGreyInfoBox'
      : 'sc-smRedInfoBox';

  return (
    <div className='m-2 mb-4 flex flex-col'>
      <h4 className='m-1 ml-0 font-medium text-scGreenColor text-xl flex'>
        <span
          className={
            streamLog.status === 'OPEN'
              ? 'mr-2'
              : 'mr-2 text-scDarkGreyColor'
          }>
          {timestampToKo(streamLog.timestamp)}
        </span>
        <span className={boxColorByStatus}>
          {streamLog.status === 'OPEN' || streamLog.status === 'CLOSE'
            ? streamLog.status
            : '데이터 없음'}
        </span>
      </h4>
      <div className='ml-2'>
        <div className='flex mb-1'>
          <span className={boxColorByStatus}>카테고리</span>
          <span className='font-bold'>
            {streamLog.liveCategory
              ? `${streamLog.liveCategoryValue} (${underBarRemover(
                  streamLog.liveCategory
                )})`
              : '카테고리 없음'}
          </span>
        </div>
        <div className='flex mb-1'>
          <span className={boxColorByStatus}>타이틀</span>
          <span className='font-bold'>
            {streamLog.liveTitle ? streamLog.liveTitle : '타이틀 없음'}
          </span>
        </div>
      </div>
    </div>
  );
}
