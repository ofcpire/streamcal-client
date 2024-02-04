import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const isoToYMDString = (isoString: string) => {
  return dayjs(isoString).format('YYYY-MM-DD');
};

export default isoToYMDString;
