import MonthLogViewer from './MonthLogViewer';
import TimeLogChart from '../TimeLogChart';

export default function MonthLogContainer({
  streamLogArray,
  metadata,
  channelInfo,
}: {
  streamLogArray: StreamLogType[];
  metadata: LogMetadataType;
  channelInfo: ChannelInfoType;
}) {
  return (
    <>
      <MonthLogViewer
        streamLogArray={streamLogArray}
        metadata={metadata}
        channelInfo={channelInfo}
      />
      <TimeLogChart streamLogArray={streamLogArray} metadata={metadata} />
    </>
  );
}
