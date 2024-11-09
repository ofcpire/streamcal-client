import timestampToKo from '../../../lib/utils/timestampToKo';
import underBarRemover from '../../../lib/utils/underBarRemover';
import { useNavigate } from 'react-router-dom';

export default function DateLogViewerItem({
  streamLog,
}: {
  streamLog: ProcessedStreamLogType;
}) {
  const navigate = useNavigate();
  const boxColorByStatus =
    streamLog.status === 'OPEN'
      ? 'sc-smInfoBox'
      : streamLog.status === 'CLOSE'
      ? 'sc-smGreyInfoBox'
      : 'sc-smRedInfoBox';

  const changeInfoStyle = boxColorByStatus + ` max-h-full`;
  const navToCategoryDetail = () => {
    if (streamLog.liveCategory)
      navigate(`/category/${streamLog.liveCategory}`);
  };

  return (
    <div className='m-2 mb-4 flex flex-col'>
      <h4 className='m-1 ml-0 font-small text-scGreenColor dark:text-scDarkModeGreenColor text-base md:text-lg md:font-bold flex items-center'>
        <span
          className={
            streamLog.status === 'OPEN'
              ? 'mr-2'
              : 'mr-2 text-scDarkGreyColor'
          }>
          {timestampToKo(streamLog.timestamp)}
        </span>
        <div className={changeInfoStyle}>
          {streamLog.status === 'OPEN' || streamLog.status === 'CLOSE'
            ? streamLog.changeInfo.map((e) => {
                return <div key={e}>{e}</div>;
              })
            : '데이터 없음'}
        </div>
      </h4>
      <div>
        <div className='flex mb-1 items-center'>
          <span className={boxColorByStatus}>카테고리</span>
          <span
            className='font-semibold cursor-pointer hover:bg-scLightGreyColor px-1 rounded-md'
            onClick={navToCategoryDetail}>
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
