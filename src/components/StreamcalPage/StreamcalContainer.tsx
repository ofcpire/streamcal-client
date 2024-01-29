import ChannelInfo from './ChannelInfo';
import LogViewer from './LogViewer';

export default function StreamcalContainer({
  streamcalData,
}: {
  streamcalData: StreamcalType;
}) {
  return (
    <>
      <ChannelInfo channelInfo={streamcalData.channelInfo} />
      <LogViewer streamLogArray={streamcalData.log} />
    </>
  );
}
