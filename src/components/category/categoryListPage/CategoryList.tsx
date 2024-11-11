import CategoryListItem from './CategoryListItem';
export default function CategoryList({
  categoryList,
}: {
  categoryList: LiveCategoryType[];
}) {
  return (
    <article className='sm:flex sm:flex-wrap sm:justify-center'>
      {categoryList.length > 0 ? (
        <>
          {categoryList.map((categoryItem) => {
            return (
              <CategoryListItem
                key={categoryItem.liveCategory}
                categoryItem={categoryItem}
              />
            );
          })}
        </>
      ) : (
        <div className='flex m-4 align-middle width-full justify-center text-base font-normal dark:text-scOffWhiteColor'>
          검색 결과가 없습니다.
        </div>
      )}
    </article>
  );
}
