const sortChannelList = (
  channelList: ChannelInfoType[],
  option?: string
) => {
  const sortedChannelList = channelList.sort((a, b) => {
    return a.channelName
      .toLowerCase()
      .localeCompare(b.channelName.toLowerCase());
  });
  return sortedChannelList;
};

export default sortChannelList;
