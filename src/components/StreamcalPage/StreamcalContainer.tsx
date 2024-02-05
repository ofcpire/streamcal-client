import ChannelInfo from './ChannelInfo';
import DateSelector from './DateSelector';
import LogChart from './LogChart';
import LogViewer from './LogViewer';

export default function StreamcalContainer({
  streamcalData,
  setStreamcalData,
}: {
  streamcalData: StreamcalType;
  setStreamcalData: React.Dispatch<React.SetStateAction<StreamcalType>>;
}) {
  return (
    <section className='w-screen md:max-w-screen-xl'>
      <ChannelInfo channelInfo={streamcalData.channelInfo} />
      <DateSelector
        setStreamcalData={setStreamcalData}
        channelInfo={streamcalData.channelInfo}
      />
      <LogChart streamLogArray={streamcalData.log} />
      <LogViewer streamLogArray={streamcalData.log} />
    </section>
  );
}
