import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const makeYearOptions = (startDate: string, endDate: string) => {
  const startYear = dayjs(startDate).year();
  const endYear = dayjs(endDate).year();
  const year = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => endYear - i
  );
  return year;
};

export default makeYearOptions;
