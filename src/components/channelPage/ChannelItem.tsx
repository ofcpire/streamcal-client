import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChannelItem({
  channelInfo,
}: {
  channelInfo: ChannelInfoType;
}) {
  const navigate = useNavigate();
  const navToCalHandler = () => {
    navigate(`/${channelInfo.channelId}`);
  };
  return (
    <div
      className='sc-lightArticle block m-2 mt-2 ml-2 cursor-pointer font-medium color-brightDarkColor md:inline-block p-4 md:p-3 hover:bg-scLightGreyColor'
      onClick={navToCalHandler}>
      {channelInfo.channelName}
    </div>
  );
}
