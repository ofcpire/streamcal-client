import { useEffect, useState } from 'react';
import timestampToKo from '../../../lib/utils/timestampToKo';
import CategoryDetailItem from './CategoryDetailItem';
import CategoryDetailSkeleton from './CategoryDetailSkeleton';
import underBarRemover from '../../../lib/utils/underBarRemover';

export default function CategoryDetailContainer({
  data,
  isLoading,
  liveCategory,
}: {
  data: LiveCategoryType | undefined;
  isLoading: boolean;
  liveCategory: string | undefined;
}) {
  const [dataHolder, setDataHolder] = useState<
    LiveCategoryType | undefined
  >(data);
  const [title, setTitle] = useState<{
    liveCategory: string;
    liveCategoryValue: string;
  }>(() => {
    const tempCategoryObj = sessionStorage.getItem('tmpcv');
    if (tempCategoryObj) {
      const parsedObj = JSON.parse(tempCategoryObj) as LiveCategoryType;
      if (parsedObj.liveCategory === liveCategory)
        return parsedObj as {
          liveCategory: string;
          liveCategoryValue: string;
        };
    }
    return {
      liveCategory: '',
      liveCategoryValue: '',
    };
  });

  useEffect(() => {
    if (data) {
      setDataHolder(data);
      setTitle(
        data as {
          liveCategory: string;
          liveCategoryValue: string;
        }
      );
    }
  }, [data]);

  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center md:items-center content-start px-2 md:px-4 md:py-4'>
      <h2 className='font-bold text-xl sm:text-3xl text-scBrightDarkColor dark:text-scOffWhiteColor text-center m-4 md:mt-0 md:pt-4'>
        {title.liveCategoryValue}
        <div className='text-sm sm:text-base font-medium'>
          {underBarRemover(title.liveCategory)}
        </div>
      </h2>
      {!dataHolder || isLoading ? (
        <CategoryDetailSkeleton />
      ) : (
        <>
          <div>
            {dataHolder.players && (
              <span className='block font-semibold text-base sm:text-xl m-4 text-scBrightDarkColor dark:text-scOffWhiteColor'>
                <span className='block'>최근 100일 동안</span>
                <span className='text-scGreenColor'>
                  {dataHolder.players.length}
                </span>
                명의 스트리머가 플레이했어요.
              </span>
            )}
          </div>
          {dataHolder.players ? (
            <ul className='sm:flex sm:flex-wrap sm:justify-center'>
              {dataHolder.players?.map((player) => {
                return (
                  <CategoryDetailItem
                    player={player}
                    key={player.channelId}
                  />
                );
              })}
            </ul>
          ) : (
            <span className='block font-bold text-scBrightDarkColor text-xl md:text-xl m-4 dark:text-scOffWhiteColor text-center md:mt-0 md:pt-4'>
              최근 100일 내에 플레이한 스트리머가 없어요.
            </span>
          )}
        </>
      )}
    </section>
  );
}
