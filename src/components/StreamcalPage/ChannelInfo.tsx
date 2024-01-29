export default function ChannelInfo({
  channelInfo,
}: {
  channelInfo: ChannelInfoType;
}) {
  return <article>{channelInfo.channelName}</article>;
}
