export default function ChannelInfo({
  channelInfo,
}: {
  channelInfo: ChannelInfoType;
}) {
  const GoToLiveHandler = () => {
    window.location.href = `https://chzzk.naver.com/live/${channelInfo.channelId}`;
  };

  return (
    <article className='sc-lightArticle p-4'>
      <h2 className='font-doHyeon text-4xl'>{channelInfo.channelName}</h2>
      <div>
        <button onClick={GoToLiveHandler} className='sc-lightButton mt-2'>
          라이브 보러 가기
        </button>
      </div>
    </article>
  );
}
