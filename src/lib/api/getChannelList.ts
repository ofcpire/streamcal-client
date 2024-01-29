import api from './axios';

const getChannelList = async (page?: number) => {
  const params = page ? { page } : {};
  try {
    const channelList = await api.get('streamcal', { params });
    return channelList.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export default getChannelList;
