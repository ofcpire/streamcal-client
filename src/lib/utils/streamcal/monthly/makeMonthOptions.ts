import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const makeMonthOptions = (
  nowYear: number,
  startDate: string,
  endDate: string
) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const startYear = start.year();
  const endYear = end.year();
  console.log(`now year:${nowYear}`);
  if (nowYear === startYear && nowYear === endYear)
    return Array.from(
      { length: end.month() - start.month() + 1 },
      (v, i) => end.month() - i + 1
    ).reverse();
  else if (nowYear === endYear)
    return Array.from({ length: end.month() + 1 }, (v, i) => i + 1);
  else if (nowYear === startYear)
    return Array.from(
      { length: 12 - start.month() },
      (v, i) => 12 - i
    ).reverse();
  else return Array.from({ length: 12 }, (v, i) => i + 1);
};

export default makeMonthOptions;
