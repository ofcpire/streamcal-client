import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import makeCategoryChartData from '../../lib/utils/streamcal/makeCategoryChartData';
import logToTimeChartOptions from '../../lib/utils/streamcal/logToTimeChartOptions';

export default function TimeLogChart({
  streamLogArray,
  metadata,
}: {
  streamLogArray: StreamLogType[];
  metadata: LogMetadataType;
}) {
  HighchartsExporting(Highcharts);
  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader mb-0'>스트리밍 시간</h3>
      <div className='rounded-xl width-max p-2 md:p-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={logToTimeChartOptions(
            makeCategoryChartData(metadata, streamLogArray)
          )}
        />
      </div>
    </article>
  );
}
