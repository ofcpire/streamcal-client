import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const calGapFiller = (logArray: StreamLogType[], mode = 'start') => {
  if (mode === 'start') {
    const startDay = dayjs(logArray[0].timestamp).startOf('month').day();
    return Array.from({ length: startDay }, (v, i) => `7-${i + 1}`);
  } else {
    const endDay = dayjs(logArray[0].timestamp).endOf('month').day();
    return Array.from(
      { length: 6 - endDay },
      (v, i) => `7-${99 - i}`
    ).reverse();
  }
};

export default calGapFiller;
