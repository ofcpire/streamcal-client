import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ChannelPage from './pages/ChannelPage';
import StreamcalPage from './pages/StreamcalPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/global/Layout';

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
        path: '/:channelId',
        element: <StreamcalPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
