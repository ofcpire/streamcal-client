import React from 'react';
import timestampToKo from '../../lib/utils/timestampToKo';

export default function LogViewer({
  streamLogArray,
}: {
  streamLogArray: StreamLogType[];
}) {
  return (
    <article>
      {streamLogArray.map((streamLog) => {
        return (
          <div key={streamLog._id}>
            ---
            <div>
              {streamLog.liveCategory ? streamLog.liveCategory : 'null'}
            </div>
            <div>{timestampToKo(streamLog.timestamp)}</div>
            <div>{streamLog.status}</div>
            ---
          </div>
        );
      })}
    </article>
  );
}
