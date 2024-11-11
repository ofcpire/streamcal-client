import api from './axios';

const getChannelList = async (
  page?: number
): Promise<ChannelInfoType[]> => {
  const params = page ? { page } : {};
  try {
    const channelList = await api.get('channel', { params });
    return channelList.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getChannelList;
