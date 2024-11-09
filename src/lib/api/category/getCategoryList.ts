import api from '../axios';

const getCategoryList = async (
  page: number | null = null,
  keyword: string | null = null
): Promise<CategoryListDataType> => {
  const params = {
    page: page && page > 0 ? page : 1,
    keyword,
    pageSize: 30,
  };
  try {
    const res = await api.get('category', { params });
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getCategoryList;
