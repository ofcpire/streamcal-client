import timestampToKo from './timestampToKo';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const logToChartOptions = (streamLog: StreamLogType[]) => {
  let logDate = dayjs(streamLog[0].timestamp);
  const sortedStreamLog = [...streamLog];
  sortedStreamLog.sort(
    (a, b) =>
      new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
  );
  const streamLogSeries = sortedStreamLog.map(
    (streamLog: StreamLogType) => {
      if (streamLog.status === 'unknown')
        return {
          name: '데이터 없음',
          liveCategory: '데이터 없음',
          x: new Date(streamLog.timestamp),
          start: timestampToKo(streamLog.timestamp),
        };
      else
        return {
          name:
            streamLog.status === 'CLOSE'
              ? 'CLOSE'
              : streamLog.liveCategory
              ? streamLog.liveCategory
              : '카테고리 없음',
          x: new Date(streamLog.timestamp),
          start: timestampToKo(streamLog.timestamp),
          liveCategory: streamLog.liveCategory
            ? streamLog.liveCategory
            : '카테고리 없음',
          liveTitle: streamLog.liveTitle,
        };
    }
  );
  const xAxisMax = logDate
    .set('hour', 23)
    .set('minutes', 59)
    .set('second', 30)
    .valueOf();
  // const logMax = 1440;

  const options = {
    exporting: {
      enabled: false,
    },
    plotOptions: {
      timeline: {},
    },
    chart: {
      zoomType: 'x',
      type: 'timeline',
    },
    title: {
      text: null,
    },
    time: {
      timezone: 'Asia/Tokyo',
    },
    xAxis: {
      max: xAxisMax,
      height: '51%',
      type: 'datetime',
      visible: true,
    },
    yAxis: {
      gridLineColor: '#cccccc',
      gridLineWidth: 6,
      visible: true,
      showFirstLabel: false,
      labels: {
        enabled: false,
      },
      title: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat:
        '타이틀: {point.liveTitle}<br/>카테고리: {point.liveCategory}<br/><b>{point.start}부터</b><br/>',
    },
    series: [
      {
        data: streamLogSeries,
      },
    ],
  };
  return options;
};

export default logToChartOptions;
