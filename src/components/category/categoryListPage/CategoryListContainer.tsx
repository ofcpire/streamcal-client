import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import CategoryPagination from './CategoryPagination';
import CategoryListSkeleton from './CategoryListSkeleton';
import CategorySearch from './CategorySearch';

export default function CategoryListContainer({
  data,
  isLoading,
  setPage,
  setKeyword,
}: {
  data: CategoryListDataType | undefined;
  isLoading: boolean;
  setPage: (page: number) => void;
  setKeyword: (keyword: string) => void;
}) {
  const [dataHolder, setDataHolder] = useState<
    CategoryListDataType | undefined
  >(data);

  useEffect(() => {
    if (data) setDataHolder(data);
  }, [data]);

  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center md:items-center content-start px-2 md:px-4 md:py-4'>
      <div className='font-bold text-lg md:text-3xl text-scBrightDarkColor dark:text-scOffWhiteColor text-center m-4 md:mt-0 md:pt-4'>
        <span className='text-scGreenColor'>치지직</span> 스트리머들은 지금
        무엇을 할까요?
      </div>
      {dataHolder && (
        <>
          <CategorySearch setKeyword={setKeyword} />
          {isLoading ? (
            <CategoryListSkeleton />
          ) : (
            <CategoryList categoryList={dataHolder.categoryList} />
          )}
          <CategoryPagination
            metadata={dataHolder.metadata}
            setPage={setPage}
          />
        </>
      )}
    </section>
  );
}
