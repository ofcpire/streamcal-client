const likeChannelKey = 'lk20240206';

const getLikeChannel = (): string[] => {
  const likeChannelList = localStorage.getItem(likeChannelKey);
  if (likeChannelList) return JSON.parse(likeChannelList);
  else return [];
};

const saveLikeChannel = (likeChannelList: string[]) => {
  localStorage.setItem(likeChannelKey, JSON.stringify(likeChannelList));
};

const addNewLikeChannel = (channelId: string) => {
  const likeChannelList = getLikeChannel();
  likeChannelList.push(channelId);
  saveLikeChannel(likeChannelList);
};

const removeLikeChannel = (channelId: string) => {
  const likeChannelList = getLikeChannel();
  const newLikeChannelList = likeChannelList.filter(
    (existChannelId: string) => {
      return !(channelId === existChannelId);
    }
  );
  saveLikeChannel(newLikeChannelList);
};

const isChannelLiked = (channelId: string) => {
  const likeChannelList = getLikeChannel();
  return likeChannelList.some(
    (existChannelId) => existChannelId === channelId
  );
};

export {
  getLikeChannel,
  addNewLikeChannel,
  removeLikeChannel,
  isChannelLiked,
};
