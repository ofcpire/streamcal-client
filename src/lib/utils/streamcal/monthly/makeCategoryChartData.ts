import dayjs from 'dayjs';
import logSorter from '../logSorter';

const makeCategoryChartData = (
  metadata: LogMetadataType,
  streamLog: StreamLogType[]
) => {
  const categoryChartData: CategoryChartDataObjType[] = [];
  const sortedStreamLog = logSorter([...streamLog]);
  const lastDate = metadata.updating
    ? dayjs(metadata.serverTime)
    : dayjs(sortedStreamLog[0].timestamp).endOf('month');
  for (let i = sortedStreamLog.length - 1; i >= 0; i--) {
    if (sortedStreamLog[i].status !== 'OPEN') continue;
    const logTimestampValue = dayjs(
      sortedStreamLog[i].timestamp
    ).valueOf();
    const nextTimeStampValue =
      i === sortedStreamLog.length - 1
        ? lastDate.valueOf()
        : dayjs(sortedStreamLog[i + 1].timestamp).valueOf();

    const categoryObj = categoryChartData.find(
      (e) => e.liveCategory === sortedStreamLog[i].liveCategory
    );
    if (!categoryObj) {
      const liveCategory = sortedStreamLog[i].liveCategory;
      const renamedCategoryValue =
        liveCategory === ''
          ? '카테고리 없음'
          : liveCategory === 'talk'
          ? '토크'
          : sortedStreamLog[i].liveCategoryValue;
      categoryChartData.push({
        liveCategory: sortedStreamLog[i].liveCategory,
        liveCategoryValue: renamedCategoryValue,
        y: nextTimeStampValue - logTimestampValue,
      });
    } else {
      categoryObj.y += nextTimeStampValue - logTimestampValue;
    }
  }

  return categoryChartData
    .sort((a, b) => {
      return a.y - b.y;
    })
    .reverse();
};

export default makeCategoryChartData;
