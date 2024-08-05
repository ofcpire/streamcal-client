const logToTimeChartOptions = (
  chartData: CategoryChartDataObjType[],
  isDarkMode: boolean
) => {
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const options = {
    title: {
      text: null,
    },
    chart: {
      type: 'bar',
      borderRadius: '0.5rem',
      height: `${150 + chartData.length * 30}px`,
      backgroundColor: isDarkMode ? '#18191a' : '#ffffff',
    },
    plotOptions: {
      bar: {
        borderColor: '',
      },
    },
    yAxis: {
      title: {
        text: '스트리밍 시간',
      },
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    xAxis: {
      title: {
        text: '카테고리',
      },
      labels: {
        style: {
          color: textColor,
        },
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

export default logToTimeChartOptions;
