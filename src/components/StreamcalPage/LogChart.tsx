import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import logToChartOptions from '../../lib/utils/logToChartOptions';
import HighchartsExporting from 'highcharts/modules/exporting';
import timeline from 'highcharts/modules/timeline';

export default function LogChart({
  streamLogArray,
}: {
  streamLogArray: StreamLogType[];
}) {
  HighchartsExporting(Highcharts);
  timeline(Highcharts);

  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader mb-0'>타임라인</h3>
      <div className='rounded-xl width-max p-2 md:p-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={logToChartOptions(streamLogArray)}
        />
      </div>
    </article>
  );
}
