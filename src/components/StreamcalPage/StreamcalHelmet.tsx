import React, { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function StreamcalHelmet({
  channelInfo,
}: {
  channelInfo: ChannelInfoType | undefined;
}) {
  const [channelInfoHolder, setChannelInfoHolder] = useState<
    ChannelInfoType | undefined
  >(undefined);
  useEffect(() => {
    if (channelInfo && !channelInfoHolder)
      setChannelInfoHolder(channelInfo);
  }, [channelInfo]);
  if (!channelInfoHolder) return <></>;
  else {
    const title = `${channelInfoHolder.channelName}의 STREAMCAL`;
    const description = `치지직 스트리머 ${channelInfoHolder.channelName}의 스트리밍 기록 쉽게 모아 보기.`;

    return (
      <Helmet>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta name='description' content={description} />
      </Helmet>
    );
  }
}
