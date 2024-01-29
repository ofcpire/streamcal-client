import React from 'react';

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
            <div>{streamLog.liveCategory}</div>
            <div>{streamLog.timestamp}</div>
            <div>{streamLog.status}</div>
            ---
          </div>
        );
      })}
    </article>
  );
}
