export default function SkeletonStreamcalPage() {
  const skeletonClass =
    'sc-lightArticle border block m-2 mt-4 md:mt-2 ml-2 font-medium color-brightDarkColor md:inline-block p-4 md:p-3 h-[50px] md:w-[150px] animate-pulse';
  return (
    <section className='w-screen md:max-w-screen-xl md:mx-4'>
      <article className='sc-lightArticleSkeleton h-[120px]'></article>
      <article className='sc-lightArticleSkeleton h-[120px]'></article>
      <article className='sc-lightArticleSkeleton h-[300px]'></article>
      <article className='sc-lightArticleSkeleton h-[300px]'></article>
    </section>
  );
}
