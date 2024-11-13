import React, { useState, useContext, useCallback } from 'react';
import {
  addNewLikeChannel,
  isChannelLiked,
  removeLikeChannel,
} from '../../lib/localStorage/likeChannel';
import { FaRegHeart, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';
import isoToYMDString from '../../lib/utils/isoToYMDString';
import { ToastContext } from '../global/ToastProvider';

const ChannelInfo = React.memo(
  function ChannelInfo({ channelInfo }: { channelInfo: ChannelInfoType }) {
    const [isLiked, setIsLiked] = useState<boolean>(
      isChannelLiked(channelInfo.channelId)
    );
    const { addNewToast } = useContext(ToastContext);

    const clickLikeHandler = useCallback(() => {
      if (isLiked) {
        removeLikeChannel(channelInfo.channelId);
        addNewToast(`${channelInfo.channelName} 즐겨찾기 삭제됨`, 'ok');
      } else {
        addNewLikeChannel(channelInfo.channelId);
        addNewToast(`${channelInfo.channelName} 즐겨찾기 완료!`, 'ok');
      }
      setIsLiked(isChannelLiked(channelInfo.channelId));
    }, [isLiked]);

    const GoToLiveHandler = () => {
      window.open(`https://chzzk.naver.com/live/${channelInfo.channelId}`);
    };
    return (
      <article className='sc-lightArticle p-4 flex relative flex-col'>
        <h2 className='font-doHyeon text-4xl'>
          {channelInfo.channelName}
        </h2>
        <span className='text-sm'>
          {isoToYMDString(channelInfo.createdAt)}부터 스트리밍 기록 중
        </span>
        <div className='flex justify-between mt-2 md:mt-4'>
          <button
            onClick={GoToLiveHandler}
            className='sc-lightButton mr-2 flex items-center'>
            치지직 라이브
            <RxOpenInNewWindow />
          </button>
          <div className='flex flex-wrap'>
            <span className='m-2 font-semibold text-scDarkGreyColor dark:text-scOffWhiteColor'>
              {isLiked ? '즐겨찾기 중!' : '즐겨찾기'}
            </span>
            <button
              onClick={clickLikeHandler}
              className={
                isLiked
                  ? 'group sc-lightButton flex justify-center items-center bg-scGreenColor dark:bg-scDarkModeGreenColor hover:bg-scRedColor'
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
  },
  (prevProps, newProps) => {
    return (
      prevProps.channelInfo.channelId === newProps.channelInfo.channelId
    );
  }
);

export default ChannelInfo;
