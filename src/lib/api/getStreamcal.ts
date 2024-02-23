import api from './axios';
import logSorter from '../utils/streamcal/logSorter';

const getStreamcal = async (
  channelId: string,
  date?: string,
  type = 'date'
): Promise<StreamcalType> => {
  const params = { date, type };
  try {
    const streamLog = await api.get(`streamcal/${channelId}`, { params });
    streamLog.data.log = logSorter(streamLog.data.log);
    return streamLog.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export default getStreamcal;
