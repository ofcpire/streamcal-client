import React from 'react';
import { useState } from 'react';
import {
  addNewLikeChannel,
  isChannelLiked,
  removeLikeChannel,
} from '../../lib/localStorage/likeChannel';

export default function ChannelInfo({
  channelInfo,
}: {
  channelInfo: ChannelInfoType;
}) {
  const [isLiked, setIsLiked] = useState<boolean>(
    isChannelLiked(channelInfo.channelId)
  );

  const clickLikeHandler = () => {
    if (isLiked) {
      removeLikeChannel(channelInfo.channelId);
    } else {
      addNewLikeChannel(channelInfo.channelId);
    }
    setIsLiked(isChannelLiked(channelInfo.channelId));
  };

  const GoToLiveHandler = () => {
    window.location.href = `https://chzzk.naver.com/live/${channelInfo.channelId}`;
  };

  return (
    <article className='sc-lightArticle p-4 flex relative'>
      <div className='flex flex-col'>
        <h2 className='font-doHyeon text-4xl'>
          {channelInfo.channelName}
        </h2>
        <button onClick={GoToLiveHandler} className='sc-lightButton mt-2'>
          라이브 보러 가기
        </button>
      </div>
      <button
        onClick={clickLikeHandler}
        className={
          isLiked
            ? 'group sc-lightButton absolute right-4 bg-scGreenColor hover:bg-scRedColor'
            : 'group sc-lightButton absolute right-4'
        }>
        <span className='group-hover:hidden'>
          {isLiked ? '즐겨찾기 중' : '즐겨찾기'}
        </span>
        <span className='hidden group-hover:inline'>
          {isLiked ? '즐겨찾기 해제' : '즐겨찾기'}
        </span>
      </button>
    </article>
  );
}
