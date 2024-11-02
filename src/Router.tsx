import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/global/Layout';
import StreamcalPage from './pages/StreamcalPage';
import ChannelPage from './pages/ChannelPage';
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ChannelPage />,
      },
      {
        path: '/zzk/:channelId',
        element: <StreamcalPage />,
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
