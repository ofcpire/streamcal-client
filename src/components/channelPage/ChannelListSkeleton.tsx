export default function ChannelListSkeleton() {
  const skeletonClass =
    'sc-lightArticle border block m-2 mt-4 md:mt-2 ml-2 font-medium color-scBrightDarkColor md:inline-block p-4 md:p-3 h-[50px] md:w-[150px] animate-pulse';
  return (
    <>
      <article className='flex flex-col md:flex-row'>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
      </article>
    </>
  );
}
