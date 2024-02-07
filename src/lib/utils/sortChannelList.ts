const sortChannelList = (
  channelList: ChannelInfoType[],
  option: string = 'ab'
) => {
  const sortedChannelList = [...channelList];
  switch (option) {
    case 'ab':
      sortedChannelList.sort((a, b) => {
        return a.channelName
          .toLowerCase()
          .localeCompare(b.channelName.toLowerCase());
      });
      break;
    case 'ba':
      sortedChannelList
        .sort((a, b) => {
          return a.channelName
            .toLowerCase()
            .localeCompare(b.channelName.toLowerCase());
        })
        .reverse();
      break;
  }
  return sortedChannelList;
};

export default sortChannelList;
