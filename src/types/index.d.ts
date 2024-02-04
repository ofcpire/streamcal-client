interface ChannelInfoType {
  channelId: string;
  channelName: string;
  verifiedMark: boolean;
  channelType: string;
  createdAt: string;
}

interface StreamcalType {
  channelInfo: ChannelInfoType;
  log: StreamLogType[];
}

interface StreamLogType {
  timestamp: string;
  _id: string;
  channelId: string;
  liveTitle: string;
  __v: string;
  liveCategory: string;
  status: string;
  liveCategoryValue: string;
}
