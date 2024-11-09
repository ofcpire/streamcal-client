import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChannelItem({
  channelInfo,
}: {
  channelInfo: ChannelInfoType;
}) {
  const navigate = useNavigate();
  const navToCalHandler = () => {
    navigate(`/zzk/${channelInfo.channelId}`);
  };
  return (
    <div className='sc-listItem' onClick={navToCalHandler}>
      {channelInfo.channelName}
    </div>
  );
}
