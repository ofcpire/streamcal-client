import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import ChannelPage from './pages/ChannelPage';
import StreamcalPage from './pages/StreamcalPage';
import ErrorPage from './pages/ErrorPage';
import getChannelList from './lib/api/getChannelList';
import getStreamcal from './lib/api/getStreamcal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ChannelPage />,
        loader: async () => {
          return await getChannelList();
        },
      },
      {
        path: '/:channelId',
        element: <StreamcalPage />,
        loader: async ({ params }) => {
          return await getStreamcal(params.channelId as string);
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
