import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const timestampToKo = (utcString: string) => {
  return dayjs(utcString).format('YYYY-MM-DD H시 m분');
};

export default timestampToKo;
