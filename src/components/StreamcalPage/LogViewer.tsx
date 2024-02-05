import React from 'react';
import LogViewerItem from './LogViewerItem';

export default function LogViewer({
  streamLogArray,
}: {
  streamLogArray: StreamLogType[];
}) {
  return (
    <article className='sc-lightArticle'>
      <h3 className='sc-articleHeader'>방송 기록</h3>
      {streamLogArray.map((streamLog: StreamLogType) => {
        return <LogViewerItem streamLog={streamLog} key={streamLog._id} />;
      })}
    </article>
  );
}
