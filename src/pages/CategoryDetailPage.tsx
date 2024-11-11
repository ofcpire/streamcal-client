import React, {
  useState,
  useEffect,
  useContext,
  Suspense,
  lazy,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import getCategoryDetail from '../lib/api/category/getCategoryDetail';
import { ErrorModalContext } from '../components/global/ErrorModalProvider';
const CategoryDetailContainer = lazy(
  () =>
    import(
      '../components/category/categoryDetailPage/CategoryDetailContainer'
    )
);

import axios from 'axios';

export default function CategoryDetailPage() {
  const navigate = useNavigate();
  const { liveCategory } = useParams();
  if (!liveCategory) navigate('/category');
  const [isInitial, setIsInitial] = useState(true);
  const { makeErrorModal, closeErrorModal } =
    useContext(ErrorModalContext);
  const { isLoading, data, refetch } = useQuery({
    queryKey: [liveCategory],
    queryFn: async () => {
      try {
        const data = await getCategoryDetail(liveCategory);
        if (data.players) {
          data.players
            .sort(
              (a, b) =>
                new Date(a.playedAt).valueOf() -
                new Date(b.playedAt).valueOf()
            )
            .reverse();
        }
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
  }, [data]);

  return (
    <Suspense>
      <CategoryDetailContainer
        data={data}
        isLoading={isLoading}
        liveCategory={liveCategory}
      />{' '}
    </Suspense>
  );
}
