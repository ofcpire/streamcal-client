import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/global/Layout';
const StreamcalPage = lazy(() => import('./pages/StreamcalPage'));
const ChannelPage = lazy(() => import('./pages/ChannelPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <ChannelPage />
          </Suspense>
        ),
      },
      {
        path: '/zzk/:channelId',
        element: (
          <Suspense>
            <StreamcalPage />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

export default router;
