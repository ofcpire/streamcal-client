export default function SkeletonChannelPage() {
  const skeletonClass =
    'sc-lightArticle border block m-2 mt-4 md:mt-2 ml-2 font-medium color-brightDarkColor md:inline-block p-4 md:p-3 h-[50px] md:w-[150px] animate-pulse';
  return (
    <section className='w-screen md:max-w-screen-xl flex flex-col md:justify-center md:items-center content-middle px-2 md:px-4'>
      <div className='font-bold text-lg md:text-3xl text-brightDarkColor text-center m-4 md:mt-0'>
        스트리머의 기록을 쉽게 모아 보기.
      </div>
      <article className='flex flex-col md:flex-row'>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
        <div className={skeletonClass}></div>
      </article>
    </section>
  );
}
