import { IoSearch } from 'react-icons/io5';

export default function ChannelSearch({
  setChannelList,
  originalChannelListData,
}: {
  setChannelList: React.Dispatch<React.SetStateAction<ChannelInfoType[]>>;
  originalChannelListData: ChannelInfoType[];
}) {
  const searchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChannelList(() => {
      if (!e.target.value) {
        return [...originalChannelListData];
      } else {
        const testValue = e.target.value.toLowerCase();
        const filteredChannel = originalChannelListData.filter(
          (channel) => {
            return channel.channelName.toLowerCase().includes(testValue);
          }
        );
        return filteredChannel;
      }
    });
  };

  return (
    <div className='sc-lightArticle p-2 m-0 bg-scOffWhiteColor flex flex-row items-center min-w-[50px]'>
      <input
        onChange={searchInputChangeHandler}
        className='flex-grow bg-transparent focus:outline-none min-w-[40px]'
        placeholder=''
      />
      <IoSearch className='flex-shrink-0 ' />
    </div>
  );
}
