import React from 'react';
import DateLogViewerItem from './DateLogViewerItem';

export default function DateLogViewer({
  streamLogArray,
}: {
  streamLogArray: ProcessedStreamLogType[];
}) {
  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader'>스트리밍 기록</h3>
      {streamLogArray.map((streamLog) => {
        return (
          <DateLogViewerItem streamLog={streamLog} key={streamLog._id} />
        );
      })}
    </article>
  );
}
