import timestampToKo from '../../../lib/utils/timestampToKo';
import underBarRemover from '../../../lib/utils/underBarRemover';

export default function DateLogViewerItem({
  streamLog,
}: {
  streamLog: ProcessedStreamLogType;
}) {
  const boxColorByStatus =
    streamLog.status === 'OPEN'
      ? 'sc-smInfoBox max-h-full'
      : streamLog.status === 'CLOSE'
      ? 'sc-smGreyInfoBox max-h-full'
      : 'sc-smRedInfoBox max-h-full';

  return (
    <div className='m-2 mb-4 flex flex-col'>
      <h4 className='m-1 ml-0 font-medium text-scGreenColor text-base md:text-xl flex items-center'>
        <span
          className={
            streamLog.status === 'OPEN'
              ? 'mr-2'
              : 'mr-2 text-scDarkGreyColor'
          }>
          {timestampToKo(streamLog.timestamp)}
        </span>
        <div className={boxColorByStatus}>
          {streamLog.status === 'OPEN' || streamLog.status === 'CLOSE'
            ? streamLog.changeInfo.map((e) => {
                return <div key={e}>{e}</div>;
              })
            : '데이터 없음'}
        </div>
      </h4>
      <div className='ml-2'>
        <div className='flex mb-1'>
          <span className={boxColorByStatus}>카테고리</span>
          <span className='font-semibold'>
            {streamLog.liveCategory
              ? `${streamLog.liveCategoryValue} (${underBarRemover(
                  streamLog.liveCategory
                )})`
              : '카테고리 없음'}
          </span>
        </div>
        <div className='flex mb-1'>
          <span className={boxColorByStatus}>타이틀</span>
          <span className='font-semibold'>
            {streamLog.liveTitle ? streamLog.liveTitle : '타이틀 없음'}
          </span>
        </div>
      </div>
    </div>
  );
}
