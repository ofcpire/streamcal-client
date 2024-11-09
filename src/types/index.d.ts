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
  metadata: LogMetadataType;
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

interface ProcessedStreamLogType extends StreamLogType {
  changeInfo: string[];
}

interface LogMetadataType {
  updating: boolean;
  targetDate: string;
  type: string;
  serverTime: string;
}

interface CategoryChartDataObjType {
  liveCategory: string;
  liveCategoryValue: string;
  y: number;
}

interface CategoryListDataType {
  metadata: {
    documentCount: number;
    page: number;
    pageSize: number;
  };
  categoryList: LiveCategoryType[];
}

interface LiveCategoryType {
  lastPlayedAt: string;
  liveCategory: string;
  liveCategoryValue: string;
  players?: LiveCategoryPlayerObjType[];
}

interface LiveCategoryPlayerObjType {
  channelId: string;
  playedAt: string;
  channelInfo?: ChannelInfoType;
}
