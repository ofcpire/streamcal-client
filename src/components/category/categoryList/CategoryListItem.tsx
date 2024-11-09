import React from 'react';
import timestampToKo from '../../../lib/utils/timestampToKo';
import { useNavigate } from 'react-router-dom';

export default function CategoryListItem({
  categoryItem,
}: {
  categoryItem: LiveCategoryType;
}) {
  const navigate = useNavigate();
  const navToCategoryDetail = () => {
    const tempValue = {
      liveCategory: categoryItem.liveCategory,
      liveCategoryValue: categoryItem.liveCategoryValue,
    };
    sessionStorage.setItem('tmpcv', JSON.stringify(categoryItem));
    navigate(`/category/${categoryItem.liveCategory}`);
  };

  return (
    <div
      key={categoryItem.liveCategoryValue}
      className='sc-listItem'
      onClick={navToCategoryDetail}>
      <div>{categoryItem.liveCategoryValue}</div>
      <div className='font-normal text-xs'>
        최근 플레이: {timestampToKo(categoryItem.lastPlayedAt)}
      </div>
    </div>
  );
}
