import React, { useEffect, useState } from 'react';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

export default function CategoryPagination({
  metadata,
  setPage,
}: {
  metadata: CategoryListDataType['metadata'];
  setPage: (page: number) => void;
}) {
  const pageChanger = (e: React.MouseEvent<HTMLLIElement>) => {
    setPage(Number(e.currentTarget.value));
  };
  const pageChangerCallback = (page: number) => {
    setPage(page);
  };
  const [currentPage, setCurrentPage] = useState<number>(metadata.page);

  const pageCount =
    metadata.pageSize >= metadata.documentCount
      ? 1
      : Math.ceil(metadata.documentCount / metadata.pageSize);
  const pageButtonArray = Array.from({ length: 9 }, (_, i) => i);
  const style =
    'sc-listItem m-0 rounded-none p-2 px-1.5 sm:px-3 first:rounded-l-md last:rounded-r-md text-xs content-center';
  useEffect(() => {
    setCurrentPage(metadata.page);
  }, [metadata]);
  console.log(pageCount);

  return (
    <nav className='my-4 flex align-middle justify-center'>
      <ul className='first:rounded-md flex'>
        <li className={style} onClick={() => pageChangerCallback(1)}>
          <FaAnglesLeft />
        </li>
        {pageButtonArray.map((e, i) => {
          const paginationVar =
            currentPage < 5
              ? currentPage - 1
              : currentPage > pageCount - 5
              ? 9 - (pageCount - currentPage + 1)
              : 4;
          const pageNum = currentPage - paginationVar + i;
          let pageButtonStyle = style;
          if (pageNum === currentPage)
            pageButtonStyle +=
              ' bg-scGreyColor dark:bg-scDarkColor dark:font-bold';
          if (pageNum > 0 && pageNum <= pageCount) {
            return (
              <li
                key={e}
                onClick={pageChanger}
                className={pageButtonStyle}
                value={pageNum}>
                {pageNum}
              </li>
            );
          }
        })}
        <li
          className={style}
          onClick={() => pageChangerCallback(pageCount)}>
          <FaAnglesRight />
        </li>
      </ul>
    </nav>
  );
}
