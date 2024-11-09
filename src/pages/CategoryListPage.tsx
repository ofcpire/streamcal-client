import React, {
  useState,
  useContext,
  lazy,
  Suspense,
  useEffect,
} from 'react';
import { useQuery } from '@tanstack/react-query';
import getCategoryList from '../lib/api/category/getCategoryList';
import { ErrorModalContext } from '../components/global/ErrorModalProvider';
import axios from 'axios';
const CategoryListContainer = lazy(
  () => import('../components/category/categoryList/CategoryListContainer')
);

export default function CategoryListPage() {
  const [page, setPage] = useState<number | null>(() => {
    const page = Number(new URLSearchParams(location.search).get('page'));
    if (page) return page;
    else return 1;
  });
  const [searchKeyword, setSearchKeyword] = useState<string | null>(
    new URLSearchParams(location.search).get('keyword')
  );
  const [isInitial, setIsInitial] = useState(true);
  const { makeErrorModal, closeErrorModal } =
    useContext(ErrorModalContext);
  const { isLoading, data, refetch } = useQuery({
    queryKey: [page, searchKeyword],
    queryFn: async () => {
      try {
        const data = await getCategoryList(page, searchKeyword);
        closeErrorModal();
        return data;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          makeErrorModal(err, refetch);
          return Promise.resolve(undefined);
        } else throw new Error(err as string);
      }
    },
    retry: 1,
    throwOnError: false,
  });

  useEffect(() => {
    if (data) setIsInitial(false);
    if ((page || searchKeyword) && data)
      window.history.replaceState(
        '',
        '',
        `?page=${page}&keyword=${searchKeyword}`
      );
  }, [data]);

  const dispatchPage = (page: number) => {
    setPage(page);
  };
  const dispatchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    setPage(1);
  };

  return (
    <Suspense>
      <CategoryListContainer
        data={data}
        isLoading={isLoading}
        setPage={dispatchPage}
        setKeyword={dispatchKeyword}
      />{' '}
    </Suspense>
  );
}
