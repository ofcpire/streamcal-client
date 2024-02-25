import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import logToChartOptions from '../../../lib/utils/streamcal/daily/logToChartOptions';
import HighchartsExporting from 'highcharts/modules/exporting';
import timeline from 'highcharts/modules/timeline';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function DateLogChart({
  streamLogArray,
  metadata,
}: {
  streamLogArray: StreamLogType[];
  metadata: LogMetadataType;
}) {
  HighchartsExporting(Highcharts);
  timeline(Highcharts);

  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader mb-0 flex justify-between'>
        타임라인
        <span className='text-base font-medium ml-2'>
          {dayjs(metadata.targetDate).format('YYYY년 M월 D일')}
        </span>
      </h3>
      <div className='rounded-xl width-max p-2 md:p-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={logToChartOptions(streamLogArray, metadata)}
        />
      </div>
    </article>
  );
}
