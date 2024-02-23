import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const logToCalArray = (logArray: StreamLogType[]) => {
  const firstLogDate = dayjs(logArray[0].timestamp);
  const calLength = firstLogDate.endOf('month').date();
  const calArray = Array.from({ length: calLength }, (v, i) => {
    const filteredLog = logArray.filter(
      (log) => dayjs(log.timestamp).date() === i + 1
    );
    const type = firstLogDate.date(i + 1).day() === 0 ? 's' : 'd';
    return {
      date: i + 1,
      log: filteredLog,
      key: `7-${i + 7}`,
      type,
    };
  });
  console.log(calArray);
  return calArray;
};

export default logToCalArray;
