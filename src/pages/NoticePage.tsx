import React, { lazy } from 'react';
const NoticeContainer = lazy(
  () => import('../components/notice/NoticeContainer')
);

export default function NoticePage() {
  return (
    <>
      <NoticeContainer />
    </>
  );
}
