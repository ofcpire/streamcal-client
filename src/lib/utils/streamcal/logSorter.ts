const logSorter = (log: StreamLogType[]) => {
  const sortedLog = [...log];
  sortedLog.sort(
    (a, b) =>
      new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
  );
  return sortedLog;
};

export default logSorter;
