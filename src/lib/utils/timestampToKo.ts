import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const timestampToKo = (utcString: string) => {
  return dayjs(utcString).format('YYYY-MM-DD HH시 mm분');
};

export default timestampToKo;
