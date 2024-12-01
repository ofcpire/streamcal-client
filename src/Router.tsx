import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/global/Layout';
import StreamcalPage from './pages/StreamcalPage';
import ChannelPage from './pages/ChannelPage';
import CategoryListPage from './pages/CategoryListPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import NoticePage from './pages/NoticePage';
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
      {
        path: '/category',
        element: <CategoryListPage />,
      },
      {
        path: '/category/:liveCategory',
        element: <CategoryDetailPage />,
      },
      {
        path: '/notice',
        element: <NoticePage />,
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
