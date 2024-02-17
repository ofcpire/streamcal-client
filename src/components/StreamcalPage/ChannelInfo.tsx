import React from 'react';
import { useState } from 'react';
import {
  addNewLikeChannel,
  isChannelLiked,
  removeLikeChannel,
} from '../../lib/localStorage/likeChannel';
import { FaRegHeart, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';
import isoToYMDString from '../../lib/utils/isoToYMDString';

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
    window.open(`https://chzzk.naver.com/live/${channelInfo.channelId}`);
  };

  return (
    <article className='sc-lightArticle p-4 flex relative flex-col'>
      <h2 className='font-doHyeon text-4xl'>{channelInfo.channelName}</h2>
      <span className='text-sm'>
        {isoToYMDString(channelInfo.createdAt)}부터 스트리밍 기록 중!
      </span>
      <div className='flex justify-between mt-2 md:mt-4'>
        <button
          onClick={GoToLiveHandler}
          className='sc-lightButton mr-2 flex items-center'>
          치지직 라이브 보러 가기
          <RxOpenInNewWindow />
        </button>
        <div className='flex flex-wrap'>
          <span className='m-2 font-semibold text-scDarkGreyColor'>
            {isLiked ? '즐겨찾기 중!' : '즐겨찾기'}
          </span>
          <button
            onClick={clickLikeHandler}
            className={
              isLiked
                ? 'group sc-lightButton flex justify-center items-center bg-scGreenColor hover:bg-scRedColor'
                : 'group sc-lightButton flex justify-center items-center'
            }>
            <span className='group-hover:hidden text-xl'>
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </span>
            <span className='hidden group-hover:inline text-xl'>
              {isLiked ? <FaHeartBroken /> : <FaHeart />}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
