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
    <article>
      --logChart--
      <HighchartsReact
        highcharts={Highcharts}
        options={logToChartOptions(streamLogArray)}
      />
      ----
    </article>
  );
}
