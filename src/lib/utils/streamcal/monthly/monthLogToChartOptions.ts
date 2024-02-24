const monthLogToChartOptions = (chartData: CategoryChartDataObjType[]) => {
  const options = {
    title: {
      text: null,
    },
    chart: {
      type: 'bar',
      borderRadius: '0.5rem',
    },
    yAxis: {
      title: {
        text: '스트리밍 시간',
      },
    },
    xAxis: {
      title: {
        text: '카테고리',
      },

      categories: chartData.map((e) => e.liveCategoryValue),
    },
    series: [
      {
        dataSorting: {
          enabled: true,
        },
        name: 'categories',
        colorByPoint: true,
        data: chartData.map((e) => {
          e.y = Number((e.y / (1000 * 60 * 60)).toFixed(2));
          return e;
        }),
      },
    ],
    tooltip: {
      pointFormat:
        '카테고리: {point.liveCategoryValue}<br/><b>{point.y}시간</b><br/>',
    },
    exporting: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
  };
  return options;
};

export default monthLogToChartOptions;
