import ChannelList from './ChannelList';
import ChannelListSplash from './ChannelListSplash';
import ChannelListSkeleton from './ChannelListSkeleton';

export default function ChannelContainer({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: ChannelInfoType[] | undefined;
}) {
  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center md:items-center content-start px-2 md:px-4 md:py-4'>
      <ChannelListSplash />
      {isLoading ? (
        <ChannelListSkeleton />
      ) : data ? (
        <ChannelList channelListData={data} />
      ) : null}
    </section>
  );
}
