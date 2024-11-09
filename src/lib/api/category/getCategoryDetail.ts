import api from '../axios';

const getCategoryDetail = async (
  liveCategory: string | undefined
): Promise<LiveCategoryType> => {
  try {
    const res = await api.get(`category/${liveCategory}`);
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getCategoryDetail;
