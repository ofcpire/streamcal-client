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
  return <div onClick={navToCalHandler}>{channelInfo.channelName}</div>;
}
