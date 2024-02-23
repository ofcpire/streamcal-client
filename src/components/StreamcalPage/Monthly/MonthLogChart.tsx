import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import makeCategoryChartData from '../../../lib/utils/streamcal/monthly/makeCategoryChartData';
import monthLogToChartOptions from '../../../lib/utils/streamcal/monthly/monthLogToChartOptions';

export default function MonthLogChart({
  streamLogArray,
  metadata,
}: {
  streamLogArray: StreamLogType[];
  metadata: LogMetadataType;
}) {
  HighchartsExporting(Highcharts);
  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader mb-0'>스트리밍 차트</h3>
      <div className='rounded-xl width-max p-2 md:p-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={monthLogToChartOptions(
            makeCategoryChartData(metadata, streamLogArray)
          )}
        />
      </div>
    </article>
  );
}
