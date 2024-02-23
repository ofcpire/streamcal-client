import MonthLogViewer from './MonthLogViewer';
import MonthLogChart from './MonthLogChart';

export default function MonthLogContainer({
  streamLogArray,
  metadata,
}: {
  streamLogArray: StreamLogType[];
  metadata: LogMetadataType;
}) {
  return (
    <>
      <MonthLogViewer streamLogArray={streamLogArray} />
      <MonthLogChart streamLogArray={streamLogArray} metadata={metadata} />
    </>
  );
}
