const processLogForViewer = (dateLogArray: StreamLogType[]) => {
  const newLog = [];
  for (let i = dateLogArray.length - 1; i >= 0; i--) {
    if (i === 0)
      newLog.push({
        ...dateLogArray[i],
        changeInfo: [dateLogArray[i].status],
      });
    else {
      const changeInfo = [];
      if (dateLogArray[i].status !== dateLogArray[i - 1].status)
        changeInfo.push(dateLogArray[i].status);
      if (dateLogArray[i].liveTitle !== dateLogArray[i - 1].liveTitle) {
        changeInfo.push('타이틀 변경');
      }
      if (
        dateLogArray[i].liveCategory !== dateLogArray[i - 1].liveCategory
      ) {
        changeInfo.push('카테고리 변경');
      }
      newLog.push({
        ...dateLogArray[i],
        changeInfo,
      });
    }
  }
  return newLog.reverse();
};

export default processLogForViewer;
