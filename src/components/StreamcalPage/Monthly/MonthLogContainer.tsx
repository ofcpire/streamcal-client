import MonthLogViewer from './MonthLogViewer';
import MonthLogChart from './MonthLogChart';

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
      <MonthLogChart streamLogArray={streamLogArray} metadata={metadata} />
    </>
  );
}
