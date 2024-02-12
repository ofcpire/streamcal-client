import api from './axios';

const getStreamcal = async (
  channelId: string,
  date?: string
): Promise<StreamcalType> => {
  const params = date ? { date } : {};
  try {
    const streamLog = await api.get(`streamcal/${channelId}`, { params });
    return streamLog.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export default getStreamcal;
